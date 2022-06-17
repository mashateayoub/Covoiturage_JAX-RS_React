import React, { Component } from 'react'
import axios from "axios";

export default class ResCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      path: window.location.pathname,
      item: props.item,
      client: {},
      Con: {},
      offer: {},
      time: '',
      date_depart: '',
    }
  }

  componentDidMount() {
    this.fetchOffer()
    this.fetchUser()
  }

  fetchOffer = async () => {
    const res = await axios({
      method: "GET",
      url: "http://127.0.0.1:8080/EJB-Client/APIv1.0/annonces/" + this.state.item.id_annonces,
      headers: { "Content-Type": "Application/json" },
    })
    if (res.status === 200) {
      let t = new Date(res.data.time.split("T")[0] + " " + res.data.time.split("T")[1].split("Z")[0])
      let d = res.data.date_depart.split("Z")[0].split("-")
      this.setState({
        offer: res.data,
        date_depart: d[2] + "/" + d[1] + "/" + (parseInt(d[0]) + 1),
        time: t.toLocaleTimeString()
      })
      this.fetchCon()
    }


  }

  fetchCon = () => {
    axios({
      method: "GET",
      url: "http://127.0.0.1:8080/EJB-Client/APIv1.0/conducteurs/" + this.state.offer.con,
      headers: { "Content-Type": "Application/json" },
    }).then((res) => {
      if (res.status === 200) {
        this.setState({
          Con: res.data
        })
      }
    })

  }

  fetchUser = async () => {
    const res = await axios({
      method: "GET",
      url: "http://127.0.0.1:8080/EJB-Client/APIv1.0/clients/login=" + this.state.item.userlogin,
      headers: { "Content-Type": "Application/json" },
    })
    if (res.status === 200) {
      this.setState({
        client: res.data
      })
    }
  }

  handleConfirm = async () => {
    const res = await axios({
      method: "PUT",
      url: "http://127.0.0.1:8080/EJB-Client/APIv1.0/reservations",
      data: {
        "id": this.state.item.id,
        "resId": this.state.item.resId,
        "userlogin": this.state.item.userlogin,
        "id_annonces": this.state.item.id_annonces,
        "confirmed": true,

      },
      headers: { "Content-Type": "Application/json" },
    })
    if (res.status === 200) {
      alert(" Reservation confirmed Successfully :) ")
      window.location.href = "/driver/reservations";
    }

  }


  render() {
    const {
      prix,
      ville_arrivee,
      ville_depart,
    } = this.state.offer
    let bg = this.state.item.confirmed ? "bg-green-100 " : "bg-red-100"
    if (this.state.path.startsWith("/driver/reservations")) {
      return (
        <div class=" mx-auto w-full" >

          <div class={" flex flex-col justify-center rounded cursor-auto shadow md:flex py-4 " + bg} >
            <div class="flex justify-between items-center mx-auto" >
              <div class=" text-xs uppercase font-bold tracking-wider bg-gray-300 inline-flex px-2 py-1 rounded mr-2" >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span> {prix} DH</span>
              </div>
              <div class="text-xs uppercase font-bold tracking-wider bg-gray-300 inline-flex px-2 py-1 rounded mr-2" >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span> {this.state.date_depart}</span>

              </div>

              <div class="text-xs uppercase font-bold tracking-wider bg-gray-300 inline-flex px-2 py-1 rounded mr-2" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 mr-1 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span> {this.state.time}</span>
              </div>
            </div>

            <div class="flex justify-between items-center mx-auto gap-1 mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 " viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
              </svg>
              <h3 class="text-md font-semibold" >{this.state.client.nom + " " + this.state.client.prenom}</h3>
              <h1 className='opacity-0' >.</h1>
              <h1 className='opacity-0'>.</h1>
              <h1 className='opacity-0' >.</h1>
              <h1 className='opacity-0' >.</h1>
              <h1 className='opacity-0' >.</h1>
              <h1 className='opacity-0' >.</h1>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 class="text-md font-semibold" >{this.state.client.tel}</h3>
            </div>
            <div class="flex justify-between items-center mx-auto gap-6 mt-4">
              <h3 class="text-lg " ><span className="font-semibold">Start: </span>{ville_depart}</h3>
              <h3 class=" text-lg" ><span className="font-semibold">Destination: </span> {ville_arrivee}</h3>
            </div>

            {this.state.item.confirmed ? <div className=' flex justify-between items-center mx-auto gap-2 mt-4'> <input type="text" class=" block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none" value={this.state.item.resId} readOnly /> <button type="submit" class="flex flex-row  px-3 pt-3 pb-2 bg-cyan-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg  transition duration-150 ease-in-out" onClick={() => { navigator.clipboard.writeText(this.state.item.resId); alert("ID copied Successfully :)") }} > Copy </button></div> : <div className=' flex justify-between items-center mx-auto gap-2 mt-4'><button class="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full" onClick={this.handleConfirm}>Confirm</button></div>}


          </div>
        </div>



      )
    } else {
      return (
        <div class=" mx-auto w-full" >

          <div class={" flex flex-col justify-center rounded cursor-auto shadow md:flex py-4 " + bg} >
            <div class="flex justify-between items-center mx-auto" >
              <div class=" text-xs uppercase font-bold tracking-wider bg-gray-300 inline-flex px-2 py-1 rounded mr-2" >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span> {prix} DH</span>
              </div>
              <div class="text-xs uppercase font-bold tracking-wider bg-gray-300 inline-flex px-2 py-1 rounded mr-2" >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span> {this.state.date_depart}</span>

              </div>

              <div class="text-xs uppercase font-bold tracking-wider bg-gray-300 inline-flex px-2 py-1 rounded mr-2" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 mr-1 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span> {this.state.time}</span>
              </div>
            </div>

            <div class="flex justify-between items-center mx-auto gap-1 mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 " viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
              </svg>
              <h3 class="text-md font-semibold" >{this.state.Con.nom + " " + this.state.Con.prenom}</h3>
              <h1 className='opacity-0' >.</h1>
              <h1 className='opacity-0'>.</h1>
              <h1 className='opacity-0' >.</h1>
              <h1 className='opacity-0' >.</h1>
              <h1 className='opacity-0' >.</h1>
              <h1 className='opacity-0' >.</h1>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 class="text-md font-semibold" >{this.state.Con.tel}</h3>
            </div>
            <div class="flex justify-between items-center mx-auto gap-6 mt-4">
              <h3 class="text-lg " ><span className="font-semibold">Start: </span>{ville_depart}</h3>
              <h3 class=" text-lg" ><span className="font-semibold">Destination: </span> {ville_arrivee}</h3>
            </div>
            <div className=' flex justify-between items-center mx-auto gap-2 mt-4'> <input type="text" class=" block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none" value={this.state.item.resId} readOnly /> <button type="submit" class="flex flex-row  px-3 pt-3 pb-2 bg-cyan-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg  transition duration-150 ease-in-out" onClick={() => { navigator.clipboard.writeText(this.state.item.resId); alert("ID copied Successfully :)") }} > Copy </button></div>
          </div>
        </div>)
    }

  }
}
