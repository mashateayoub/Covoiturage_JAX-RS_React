import React, { Component } from 'react'
import Header from '../../Partials/Driver/Header'
import axios from 'axios'
import OfferCompo from '../../utils/Driver/OfferCompo'

export default class Annonces extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      con: sessionStorage.getItem("id_con"),
      is_loaded: false
    }
  }


  componentDidMount = () => {

    this.fetchOffers()

  }


  fetchOffers = async () => {
    const res = await axios({
      method: "GET",
      url: "http://127.0.0.1:8080/EJB-Client/APIv1.0/annonces/",
      headers: { "Content-Type": "Application/json" },
    })
    if (res.status === 200 && res.data.con !== 0) {
      let liste = []
      for (let offer in res.data) {
        console.log(res.data[offer].con)
        if (res.data[offer].con === parseInt(this.state.con)) {
          liste.push(res.data[offer])
        }
      }
      this.setState({
        data: liste,
        is_loaded: true
      })
    }
    else {
      this.setState({
        is_loaded: false
      })
    }
  }


  render() {

    return (
      <div className="">
        <Header />
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Offers</h1>
          </div>
        </header>

        <main >
          <div className="bg-gray-50" >
            <div className=" max-w-7xl px-4 py-6 sm:px-0 mx-auto pb-24">
              <div className="py-2 md:py-4 px-2 md:px-8 xl:px-10 ">

                <div className="sm:flex items-center justify-between">

                  {/* <div className="flex items-center">
                        <a className="rounded-full focus:outline-none focus:ring-2  focus:bg-cyan-50 focus:ring-cyan-800" href=" /driver/offers?tag=All">
                            <div className="py-2 px-8 bg-cyan-100 text-cyan-700 rounded-full" >
                                <p>All</p>
                            </div>
                        </a>
                        <a className="rounded-full focus:outline-none focus:ring-2 focus:bg-cyan-50 focus:ring-cyan-800 ml-4 sm:ml-8" href="/driver/offers?tag=Done">
                            <div className="py-2 px-8 text-gray-600 hover:text-cyan-700 hover:bg-cyan-100 rounded-full ">
                                <p>Done</p>
                            </div>
                        </a>
                        <a className="rounded-full focus:outline-none focus:ring-2 focus:bg-cyan-50 focus:ring-cyan-800 ml-4 sm:ml-8" href="/driver/offers?tag=Pending">
                            <div className="py-2 px-8 text-gray-600 hover:text-cyan-700 hover:bg-cyan-100 rounded-full ">
                                <p>Pending</p>
                            </div>
                        </a>
                    </div> */}
                  <div></div>
                  <div></div>
                  <div></div>
                  <a href="/driver/AddOffer" className="focus:ring-2 focus:ring-offset-2 text-white focus:ring-cyan-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-cyan-700 hover:bg-cyan-600 focus:outline-none rounded" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>  Add Offer
                  </a>
                </div>
              </div>


              <div className="mt-7 overflow-x-auto ">
                <table className="w-full whitespace-nowrap table-fixed gap-2">
                  <tbody className='gap-4'>
                    {this.state.is_loaded ? this.state.data.map((offer) => (<OfferCompo key={offer.id_annonces} offer={offer} />)) : <div className='flex justify-center py-8'><img src='https://www.svgrepo.com/show/314685/spinner-solid.svg' className='animate-spin w-24 ' alt=" " /></div>}



                  </tbody>
                </table></div>
            </div>
          </div>
        </main>


      </div>
    )
  }
}
