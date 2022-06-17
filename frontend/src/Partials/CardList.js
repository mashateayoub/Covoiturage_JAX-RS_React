
import React, { Component } from 'react';
import axios from "axios";
import Card from '../utils/Card';
import Select from 'react-select';


class CardList extends Component {

  constructor() {
    super()
    this.state = {
      raw: [],
      data: [],
      depart: " ",
      destination: " ",
      date: " ",
      loading: false,
      valid_search: true
    }
  }
  componentDidMount = () => {
    this.setState({ loading: true })
    this.fetchOffers()


  }


  fetchOffers = async () => {
    const res = await axios({
      method: "GET",
      url: "http://127.0.0.1:8080/EJB-Client/APIv1.0/annonces/",
      headers: { "Content-Type": "Application/json" },
    })
    if (res.status === 200) {
      this.setState({
        raw: res.data,
        data: res.data,
        loading: false
      })
    }


  }

  SearchByParams = () => {
    this.setState({ valid_search: true })
    if (this.state.depart !== " " && this.state.destination !== " " && this.state.date !== " ") {
      console.log(this.state.raw)
      this.setState({ loading: true })
      this.setState({
        data: this.state.raw.filter(offer => offer.ville_depart.localeCompare(this.state.depart) === 0 &&
          offer.ville_arrivee.localeCompare(this.state.destination) === 0 &&
          offer.date_depart.localeCompare(this.state.date + "Z") === 0),
        loading: false
      });

    } else {
      this.setState({ valid_search: false })
    }

  }

  sortByPrice = async () => {
    this.setState({ loading: true })
    this.setState(
      ({ data }) => (
        {
          data: data.sort((a, b) => {
            let fa = a.prix,
              fb = b.prix;

            if (fa < fb) {
              return -1;
            }
            if (fa > fb) {
              return 1;
            }
            return 0;
          }),
          loading: false
        }));
  }

  handleCityDepartChange = (event) => {
    this.setState({ valid_search: true })
    this.setState({
      depart: event.value

    })
  }

  handleCityDestChange = (event) => {
    this.setState({ valid_search: true })
    this.setState({
      destination: event.value
    })
  }
  handleDateChange = (event) => {
    let d = event.target.value.split("-")
    let d1 = d[0] + "-" + d[1] + "-" + (parseInt(d[2]) - 1)
    this.setState({ valid_search: true })
    this.setState({
      date: d1
    })
  }


  render() {
    var data = require("../Data/cities.json")
    data.cities.sort((a, b) => {
      let fa = a.value.toLowerCase(),
        fb = b.value.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    })

    return (
      <main >

        {/* form */}

        <div className='flex py-4 justify-center align-center  bg-cyan-800 text-white drop-shadow-xl'>
          <div style={{ width: "1200px" }}>
            <div class="max-w-6xl  mt-10 drop-shadow-xl ">
              {!this.state.valid_search ? <div><p className='text-center text-white text-bold  text-base transition-shadow ease-in-out duration-5000 '>Enter all informations !</p></div> : " "}
              <form className='grid grid-cols-4 grid-rows-1 gap-6 mt-8'>
                <div class="relative z-0 mb-6  w-full group fo">
                  <label for="countries" class="block mb-2 text-sm font-medium  dark:text-gray-400">Start</label>
                  <Select className="text-semibold text-cyan-800" options={data.cities} onChange={this.handleCityDepartChange} required />

                </div>
                <div class="relative z-0 mb-6 w-full group ">
                  <label for="countries" class="block mb-2 text-sm font-medium  dark:text-gray-400">Destination</label>
                  <Select className="text-semibold text-cyan-800" options={data.cities} onChange={this.handleCityDestChange} required />
                </div>
                <div class=" z-0 mb-6 w-full group datepicker relative ">
                  <label for="floatingInput" class="block mb-2 text-sm font-medium  dark:text-gray-400">Date</label>
                  <input type="date" name='date' min={new Date().toISOString().split('T')[0]} required
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                    placeholder="Select a date" onChange={this.handleDateChange} />

                </div>
                <div class="relative z-0 mb-6 w-full group mt-6 ">
                  <button onClick={this.SearchByParams} type="button" class={"text-cyan-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-cyan-500 font-semibold rounded-md text-lg w-full sm:w-full px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"}>Search</button>
                </div>
              </form>
            </div>
          </div>

        </div>


        {/* list */}
        <div>
          <div className="mx-auto px-12 bg-gray-50 min-h-screen " >
            <div className='py-8 flex flex-row justify-between'>
              <div className='font-semibold text-xl italic font-serif ml-6'>
                <h1 > 🔍  Results for your search :    </h1>
              </div>
              <div className=''>
                <button onClick={this.sortByPrice} className=" font-semibold mr-4 text-white bg-cyan-500 hover:bg-cyan-400 border-0 py-2 px-4 focus:outline-none rounded  " >Sort by Price 💰 </button>{' '}

              </div>
            </div>

            {this.state.loading ? <div className='flex justify-center py-8'><img src='https://www.svgrepo.com/show/314685/spinner-solid.svg' className='animate-spin w-24 ' alt=" " /></div> : this.state.data.length !== 0 ? <div className='p-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 align-middle'> {this.state.data.map((item) => (<Card key={item.id} item={item} />))}</div> : <p className='flex text-lg justify-center py-8 text-semibold font-serif' > 😔 Sorry, no results found. </p>}

          </div>
        </div>
      </main>
    );
  }
}

export default CardList;










