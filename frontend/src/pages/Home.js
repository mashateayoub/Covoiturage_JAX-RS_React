import React from 'react';
import ResponsiveNavBar from "../Partials/Header"





function Home() {


  return (
    <div className="flex flex-col min-h-4xl overflow-hidden">

      {/*  Site header */}
      <ResponsiveNavBar />

      {/*  Page content */}
      <main className="flex-grow  text-black font-sans">

        {/* home section */}
        <div class="relative bg-transparent   ">
          <div className='absolute right-24 top-10 max-w-4xl'>
            <img src='asset_home2.svg' alt="Background" className='' width={'650px'} />
          </div>
          <div class="relative max-w-4xl py-12 px-8 ml-4 sm:py-20 sm:px-8 lg:px-12">
            <div className='max-w-2xl mb-2 mt-4'>
              <p class="font-black sm:text-6xl ">
                Travel 🚗  <span className='text-cyan-500  '>comfortably </span> with <span className='text-cyan-500 '>trusted</span> people and at the<span className='text-cyan-500 '> lowest </span> price 💸 !
              </p>
              <p class="mt-6 text-lg leading-6 "><span className='text-cyan-500 font-semibold'>+ 400,000</span>  members trust Us and carpool every day, everywhere in Morocco</p>
            </div >
            <div className='max-w-6xl py-10 mb-1 text-black my-16 '>
              <a href="/ride" className=" mr-5 font-bold text-white text-lg bg-cyan-500 hover:bg-cyan-400 border-0 py-2 px-4 focus:outline-none rounded  mt-4 md:mt-0" >Explore Now </a>
            </div>

          </div>
        </div>
        {/*  Page sections */}


      </main>

      {/*  Site footer */}


    </div>
  );
}

export default Home;