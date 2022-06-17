import React from 'react';
import ResponsiveNavBar from "../Partials/Header"
import axios from 'axios';



function Drive() {
  let state={
    login:sessionStorage.getItem("userID").split('@')[1],
    password: sessionStorage.getItem("userID").split('@')[2],
  }
  axios({
      method: "GET",
      url: "http://127.0.0.1:8080/EJB-Client/APIv1.0/users/"+state.login,
      headers: { "Content-Type": "Application/json"},
  }).then((res)=>{
    if(res.status===200 && res.data.con!==0){sessionStorage.setItem("driversignupcheckerror", "yes")}
    else{
        axios({
            method: "GET",
            url: "http://127.0.0.1:8080/EJB-Client/APIv1.0/clients/login="+state.login,
            headers: { "Content-Type": "Application/json"},
        }).then((res2)=>{
          if(res2.status===200 ){
            sessionStorage.setItem("driversignupcheckerror", "no")
            }
          else{
               sessionStorage.setItem("driversignupcheckerror", "yes")
              }
        })
        
      }
  })
    
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <ResponsiveNavBar />

      {/*  Page content */}
      <main className="flex flex-row py-32 px-8 justify-center text-black font-sans  ">

        <div className=' flex flex-col items-center justify-center  py-16 w-auto px-20 ' >
                <h1 className='text-4xl font-bold italic text-black font-serif '>Already a Driver ?</h1>
                <p className='text-xl font-light italic text-black '>Connect to your driver Account</p>
                <a href="/driver/CheckLogin" alt="" className='drop-shadow-2xl shadow-xl hover:drop-shadow-none hover:shadow-cyan-400 mt-12 text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-500 font-semibold rounded-md text-lg w-full sm:w-full px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'>Connect</a>
        </div>
        <div className=' flex items-center justify-center align-middle py-16 w-44 '><div className="text-gray-600 text-4xl italic font-semibold">Or</div></div>
        <div className=' flex flex-col items-center justify-center  py-16 w-auto px-20 '> 
                <h1 className='text-4xl font-bold italic text-black font-serif '>Become a Driver ?</h1>
                <p className='text-xl font-light italic text-black '>Create  your driver Account</p>
                <a href="/driver/signup" alt="" className='drop-shadow-2xl shadow-xl hover:drop-shadow-none hover:shadow-cyan-400 mt-12 text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-500 font-semibold rounded-md text-lg w-full sm:w-full px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'>Create Account</a>
        </div>
        {/*  Page sections */}


      </main>

      {/*  Site footer */}


    </div>
  );
}

export default Drive;