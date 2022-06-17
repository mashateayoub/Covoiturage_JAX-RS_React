import React from 'react'
import Header from '../../Partials/Driver/Header'
import axios from 'axios'
import Select from 'react-select';


export default class UpdateOffer extends React.Component {

      constructor(){
        super()
        this.state={
            data: require("../../Data/cities.json"),
            id:new URLSearchParams(window.location.search).get('id'),
            offer: {},
            depart: "",
            dest: " ",
            date: [],
            mindate: [],
            nombre_places: 0,
            prix: 0,
            time: "",
            HMS:[],
            is_updated: false
        }
      }
      
      componentDidMount =  ()=>{
        this.fetchOffer()
        }

      fetchOffer =  () => {
        axios({
          method: "GET",
          url: "http://127.0.0.1:8080/EJB-Client/APIv1.0/annonces/"+this.state.id,
          headers: { "Content-Type": "Application/json"},
            }).then((res) => {
                  if(res.status===200){
                    let[h,mm,s] =res.data.time.split("T")[1].split('Z')[0].split(":")
                    let [y,m,d] =res.data.time.split("T")[0].split("-")
                    let time=new Date(y,m,d,h,mm,s).getTime()
                    console.log(time)
                    this.setState({
                        offer: res.data,
                        depart: res.data.ville_depart,
                        dest: res.data.ville_arrivee,
                        date: res.data.date_depart.split('Z')[0].split("-"),
                        mindate: res.data.date_depart.split('Z')[0].split("-"),
                        nombre_places: res.data.nombre_places,
                        prix: res.data.prix,
                        time:time,
                        HMS: res.data.time.split("T")[1].split('Z')[0].split(":")
                      })
                }});
          

      }

        handleUpdate = async () => {
          if(this.state.depart!==" " && this.state.dest!==" " && this.state.date!==" " && this.state.nombre_places!==null && this.state.time!==null && this.state.prix!==null){
            const res= await axios({
                method: "PUT",
                url: "http://127.0.0.1:8080/EJB-Client/APIv1.0/annonces?mili="+this.state.time,
                data: {
                  ville_depart:this.state.depart ,
                  ville_arrivee:this.state.dest,
                  date_depart:this.state.date[0]+"-"+this.state.date[1]+"-"+(parseInt (this.state.date[2])+1),
                  nombre_places:this.state.nombre_places,
                  prix:this.state.prix,
                  con:this.state.offer.con,
                  id:this.state.offer.con,
                  id_annonces: this.state.offer.id_annonces,
                },
                headers: { "Content-Type": "Application/json"},
            })
            if(res.status!==200){
              localStorage.setItem("updatedoffer", "false")
              alert("There was an error Updating this offer X( ")
              window.location.href = "/driver/UpdateOffer";
                
            }
            else{
              localStorage.setItem("updatedoffer", "true")
                this.setState({
                  is_updated: true
                })
                alert("Offer Updated Successfully :) ")
                window.location.href = "/driver/offers";
              
            }
          }else{
            localStorage.setItem("updatedoffer", "false")
              alert("Enter  All Informations X( ")
              window.location.href = "/driver/UpdateOffer";
          }




        }
  
        
    handleCityDepartChange = (event) => {
      
      this.setState({
        depart : event.value
        
      })
    }
    

    handleCityDestChange = (event) => {
      
      this.setState({
        dest : event.value
        
      })
    }

    handleDateChange = (event) => {

      this.setState({
        date : event.target.value.split("-")
        
      })
    }


    handlePlacesChange = (event) => {
      
      this.setState({
        nombre_places : event.target.value
        
      })
    }
    
    
    handlePrixChange = (event) => {
      
      this.setState({
        prix : event.target.value
        
      })
    }

    
    handleTimeChange = (event) => {
      let[h,mm] =event.target.value.split(":")
      let time=new Date(1970,1,1,h,mm,0).getTime()
      console.log(time)
      this.setState({
        time : time
        
      })




    }
    


  render(){
    
    this.state.data.cities.sort((a, b) => {
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
      <div className="min-h-full">
          <Header />
  
  
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Update Offer</h1>
      </div>
    </header>

    <div className="flex flex-col min-h-full pb-60 overflow-hidden container mx-auto px-6">
      
    <div className="flex justify-center py-1 items-center text-center">

      </div>

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-white">
          <div className="mx-auto px-4 sm:px-6">
            <div className="pt-8 pb-8 md:pt-4 md:pb-15 px-24">

              {/* Form */}
              <div className='pt-6'>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6' >
                
                <div class=" z-0 mb-6 w-full group datepicker relative  ">
                <label for="floatingInput" class="block mb-2 text-sm font-medium  dark:text-gray-400">Date</label>
                    <input type="date" name='date' min={this.state.mindate[0]+"-"+this.state.mindate[1]+"-"+(parseInt (this.state.mindate[2])+1)} Value={this.state.date[0]+"-"+this.state.date[1]+"-"+(parseInt (this.state.date[2]))}   onChange={this.handleDateChange}
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                      placeholder="Select a date" />
                    
                  </div>
                  
                    <div class="relative z-0 mb-6  w-full group">
                  <label for="floatingInput" class="block mb-2 text-sm font-medium  dark:text-gray-400">Time</label>
                    <input type="time" name='nombre_places'  Value={this.state.HMS[0]+":"+this.state.HMS[1]}    onChange={this.handleTimeChange}
                      class="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none"/>
                    </div>

                    <div class="relative z-0 mb-6  w-full group">
                  <label for="floatingInput" class="block mb-2 text-sm font-medium  dark:text-gray-400">Price</label>
                    <input type="number" name='prix'  Value={this.state.prix}    onChange={this.handlePrixChange}
                      class="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none"/>
                    </div>
                    <div class="relative z-0 mb-6  w-full group">
                    <label for="countries" class="block mb-2 text-sm font-medium  dark:text-gray-400">Start</label>
                    <Select  options={this.state.data.cities} name="depart" className="z-30 text-semibold text-cyan-800"   value={{ label: this.state.depart, value: this.state.depart }}  onChange={this.handleCityDepartChange} required/>
                        </div>
                    <div class="relative z-0 mb-6 w-full group">
                    <label for="countries" class="block mb-2 text-sm font-medium  dark:text-gray-400">Destination</label>
                    <Select options={this.state.data.cities} name="destination" className="z-30 text-semibold text-cyan-800"  value={{ label: this.state.dest, value: this.state.dest }}  onChange={this.handleCityDestChange}/>                      
                      </div>

                    <div class="relative z-0 mb-6  w-full group">
                  <label for="floatingInput" class="block mb-2 text-sm font-medium  dark:text-gray-400">Seats number</label>
                    <input type="number" name='nombre_places'  Value={this.state.nombre_places}    onChange={this.handlePlacesChange}
                      class="  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none"/>
                    </div>

                    <br />
                    <div></div>

                
                    <button onClick={this.handleUpdate}  class="mt-4 text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-500 font-semibold rounded-md text-lg w-full sm:w-full px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">Update offer</button>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  
    </div>
    )

  }
  
}
