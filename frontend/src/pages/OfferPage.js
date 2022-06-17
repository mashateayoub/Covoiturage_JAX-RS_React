import React, { Component } from 'react'
import ResponsiveNavBar from "../Partials/Header"
import axios from 'axios'

export default class OfferPage extends Component {

  constructor() {
    super()
    this.state = {
      id: new URLSearchParams(window.location.search).get('id'),
      offer: {},
      conducteur: {},
      date: [],
      time: new Date(),
      HMS: [],
      resId: ""
    }
  }

  componentDidMount = () => {
    this.fetchOffer()

  }

  fetchOffer = () => {
    axios({
      method: "GET",
      url: "http://127.0.0.1:8080/EJB-Client/APIv1.0/annonces/" + this.state.id,
      headers: { "Content-Type": "Application/json" },
    }).then((res) => {
      if (res.status === 200) {

        let [h, mm, s] = res.data.time.split("T")[1].split('Z')[0].split(":")
        let [y, m, d] = res.data.time.split("T")[0].split("-")
        let time = new Date(y, m, d, h, mm, s).getTime()
        this.setState({
          offer: res.data,
          date: res.data.date_depart.split('Z')[0].split("-"),
          time: new Date(res.data.time.split("T")[0] + " " + res.data.time.split("T")[1].split("Z")[0]),
        })
        this.getCon(res.data.con)

      }
    });




  }

  ResrveOffer = () => {
    let d = new Date().toLocaleTimeString()
    const str = sessionStorage.getItem("userID").split("@")[1] + "@" + d + "@" + this.state.offer.con

    axios({
      method: "POST",
      url: "http://127.0.0.1:8080/EJB-Client/APIv1.0/reservations",
      data: {
        "id_annonces": this.state.id,
        "resId": window.btoa(str),
        "userlogin": sessionStorage.getItem("userID").split("@")[1],
        "confirmed": false,
      },
      headers: { "Content-Type": "Application/json" },
    }).then((res) => {
      if (res.status !== 200) {
        alert("Error: can't book X( ")
      }
      else {
        this.setState({
          resId: res.data
        })
        axios({
          method: "PUT",
          url: "http://127.0.0.1:8080/EJB-Client/APIv1.0/annonces",
          data: {
            ville_depart: this.state.offer.ville_depart,
            ville_arrivee: this.state.offer.ville_arrivee,
            date_depart: this.state.offer.date_depart,
            nombre_places: this.state.offer.nombre_places - 1,
            prix: this.state.offer.prix,
            con: this.state.offer.con,
            id: this.state.offer.con,
            id_annonces: this.state.offer.id_annonces,
          },
          headers: { "Content-Type": "Application/json" },
        }).then((res) => {
          if (res.status === 200) {
            this.setState({
              is_added: true
            })
            alert("Congrats, you booked your place in this ride :) ")
            window.location.href = "/ride/bookedOffer?resID=" + this.state.resId;
          }
        })
      }
    })
  }

  getCon = (con) => {
    axios({
      method: "GET",
      url: "http://127.0.0.1:8080/EJB-Client/APIv1.0/conducteurs/" + con,
      headers: { "Content-Type": "Application/json" },
    }).then((res) => {
      if (res.status === 200) {
        this.setState({
          conducteur: res.data
        })
      }
    })

  }

  render() {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">

        {/*  Site header */}
        <ResponsiveNavBar />

        <div class="bg-gray-50  md:flex items-start justify-center pt-32 pb-44 md:px-6 px-4 ">
          <div class="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6 bg-white px-8 py-10">
            <div class=" flex flex-row justify-center border-b border-gray-200 pb-6" >
              <h1 class="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">{this.state.offer.ville_depart}</h1>
              <p className='align-text-center pt-2 mx-10 text-2xl  font-bold'> ------------------ </p>
              <h1 class="right-0 lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">{this.state.offer.ville_arrivee}</h1>
            </div>
            <div class="px-8 py-4 border-b border-gray-200 flex items-center justify-between">
              <div class="flex items-center  text-gray-700" >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className='py-3 px-3 text-sm focus:outline-none leading-none  italic font-semibold rounded'> {this.state.offer.prix} DH</span>
              </div>
              <div class="flex items-center  text-gray-700" >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className='py-3 px-3 text-sm focus:outline-none leading-none  italic font-semibold rounded'> {this.state.date[0] + "/" + this.state.date[1] + "/" + (parseInt(this.state.date[2]) + 1)}</span>
              </div>

              <div class="flex items-center  text-gray-700" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 mr-1 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className='py-3 px-3 text-sm focus:outline-none leading-none  italic font-semibold rounded'> {this.state.time.toLocaleString().split(",")[1]}</span>
              </div>
              <div className="flex items-center  text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 mr-1 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <p className="py-3 px-3 text-sm focus:outline-none leading-none  italic font-semibold rounded">{this.state.offer.nombre_places}</p>
              </div>
            </div >
            <div class="px-8 py-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center  text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                </svg>
                {this.state.conducteur.nom} {this.state.conducteur.prenom}
              </div>
              <div className="flex items-center  text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {this.state.conducteur.tel}
              </div>
            </div>

            <button onClick={this.ResrveOffer} class="dark:bg-white  dark:text-gray-900 dark:hover:bg-cyan-100 w-auto focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  flex items-center justify-center text-xl font-semibold leading-none text-white bg-cyan-600 px-8 mt-8 rounded  py-4 hover:bg-cyan-500 focus:outline-none">
              <img class="mr-3 dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg1.svg" alt="location" />
              <img class="mr-3 hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg1dark.svg" alt="location" />
              Book a place in this ride
            </button>

          </div>
        </div>


      </div>
    )
  }
}
