import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Signup extends React.Component {
  constructor(){
    super()
    this.state={
      login:sessionStorage.getItem("userID").split('@')[1],
      password: sessionStorage.getItem("userID").split('@')[2],
      driver:{}
    }
  }


    componentDidMount = () => {

      this.getUser()
      
    }

  getUser = async () => {

          const res= await axios({
            method: "GET",
            url: "http://127.0.0.1:8080/EJB-Client/APIv1.0/users/"+this.state.login,
            headers: { "Content-Type": "Application/json"},
        })
          console.log(res.data)
          if(res.status===200 && res.data.con!==0){sessionStorage.setItem("driversignupcheckerror", "yes")}
          else{
                const res2= await axios({
                  method: "GET",
                  url: "http://127.0.0.1:8080/EJB-Client/APIv1.0/clients/login="+this.state.login,
                  headers: { "Content-Type": "Application/json"},
              })
              console.log(res2.data)
              if(res2.status===200 ){
                sessionStorage.setItem("driversignupcheckerror", "no")
                this.setState({
                  driver: res2.data
                })
                }
              else{
                   sessionStorage.setItem("driversignupcheckerror", "yes")
                  }
            }
      }



        render(){
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      
    <div className="flex justify-center py-8 items-center text-center">
      <a href='/' className="flex title-font  items-center text-cyan-500 mb-4 md:mb-0">
        <img src="https://th.bing.com/th/id/R.43cbe371eab620cc34f430f23b59ae38?rik=msO6LwhDtZ7Z%2bA&pid=ImgRaw&r=0" alt="icon" className="w-16 ml-4"/>
        <span className="ml-3 text-5xl font-extrabold text-black font-serif">Covoit'<span className="text-cyan-500 font-light italic">ici</span></span>
      </a>
      </div>

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-white">
          <div className="mx-auto px-4 sm:px-6">
            <div className="pt-8 pb-8 md:pt-4 md:pb-15 px-24">

              {/* Page header */}
              <div className="max-w-4xl mx-auto pb-8 text-center  ">
                <h1 className="text-5xl font-black  text-black  ">Become a driver and help people  </h1>
              </div>
              {/* Form */}
              <div className='pt-6'>

                <form className='grid grid-cols-1 sm:grid-cols-4 gap-6' action="/driver/accdriver" method='GET'>
                <label className='font-bold text-xl'>Driver's informations : </label> 
                <div className="relative z-0  mb-6  w-full group">
                        <input readonly value={this.state.driver.nom}  type="text" name="first name" class="block py-2.5 w-full text-lg font-semibold  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" " required />
                        <label for="first name" class="absolute text-lg font-semibold  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
                    </div>
                <div class="relative z-0  mb-6  w-full group">
                        <input readonly value={this.state.driver.prenom} type="text" name="last name" class="block py-2.5 w-full text-lg font-semibold  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" " required />
                        <label for="last name" class="absolute text-lg font-semibold  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
                    </div>
                    
                <div class="relative z-0  mb-6  w-full group">
                        <input readonly value={this.state.driver.age} type="number" name="Age" class="block py-2.5 w-full text-lg font-semibold  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" " required />
                        <label for="Age" class="absolute text-lg font-semibold  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age</label>
                    </div><br />
                    <br/>
                    
                <div class="relative z-0  mb-6  w-full group">
                <label for="sexe" class="absolute text-lg font-semibold  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gender</label>
                <select id="sexe" name='sexe' class="block py-2.5 w-full text-lg font-semibold  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer">
                  <option>Male</option>
                  <option>Female</option>
                </select>                        
                    </div>
                <div class="relative z-0  mb-6  w-full group">
                        <input readonly value={this.state.driver.tel} type="text" name="phone" class="block py-2.5 w-full text-lg font-semibold  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" " required />
                        <label for="phone" class="absolute text-lg font-semibold  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                    </div>
                    
                    <div class="relative z-0  mb-6 w-full group ">
                        <input readonly value={this.state.driver.email} type="mail" name="Email"  class="block py-2.5 w-full text-lg font-semibold  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" " required />
                        <label for="Email" class="absolute text-lg font-semibold  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Business Email</label>
                    </div>
                    <br />
                    <div class="relative z-0  mb-6 w-full group col-span-2">
                        <input type="text" name="adress"  class="block py-2.5 w-full text-lg font-semibold  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" " required />
                        <label for="adress" class="absolute text-lg font-semibold  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Adresse</label>
                    </div>
                    <br />
                    
                    <label className='font-bold text-xl'>Car's informations : </label>
                <div class="relative z-0  mb-6  w-full group">
                        <input type="text" name="matricule" class="block py-2.5 w-full text-lg font-semibold  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" " required />
                        <label for="matricule" class="absolute text-lg font-semibold  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Service Number</label>
                    </div>
                <div class="relative z-0  mb-6  w-full group">
                        <input type="text" name="Marque" class="block py-2.5 w-full text-lg font-semibold  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" " required />
                        <label for="Marque" class="absolute text-lg font-semibold  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Brand</label>
                    </div>
                    <div class="relative z-0  mb-6  w-full group">
                        <input type="number" name="nbrplaces" class="block py-2.5 w-full text-lg font-semibold  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" " required />
                        <label for="nbrplaces" class="absolute text-lg font-semibold  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Number of seats</label>
                    </div>
                    {(sessionStorage.getItem("driversignupcheckerror")!== null && sessionStorage.getItem("driversignupcheckerror").localeCompare("yes")===0) ? <p className='text-red-500 pt-4'>Account linked to a driver profile, <Link to={"/drive"} className=" border-b-2 text-gray-600">login</Link> instead</p> :<button type="submit" class="mt-4 text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-500 font-semibold rounded-md text-lg w-full sm:w-full px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">Join Now</button>}
                </form>

              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );

        }
}


