import React from 'react';
import Select from 'react-select';





function SearchForm() {

  var name= window.location.pathname
  var data=require("../Data/cities.json")
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
    <div class="max-w-6xl  mt-10 drop-shadow-xl ">
    <form className='grid grid-cols-4 grid-rows-1 gap-6 ' method='GET' action='/ride'>
            <div class="relative z-0 mb-6  w-full group">
            <label for="countries" class="block mb-2 text-sm font-medium  dark:text-gray-400">Start</label>
            <Select options={data.cities} name="depart" />
                </div>
            <div class="relative z-0 mb-6 w-full group">
            <label for="countries" class="block mb-2 text-sm font-medium  dark:text-gray-400">Destination</label>
            <Select options={data.cities} name="destination" />                      
              </div>
            <div class=" z-0 mb-6 w-full group datepicker relative  ">
            <label for="floatingInput" class="block mb-2 text-sm font-medium  dark:text-gray-400">Date</label>
                <input type="date" name='date' min={new Date().toISOString().split('T')[0]}
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                  placeholder="Select a date" />
                
              </div>
            <div class="relative z-0 mb-6 w-full group mt-6 ">
            <button  type="submit" class={name.startsWith("/ride") ? "text-cyan-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-cyan-500 font-semibold rounded-md text-lg w-full sm:w-full px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800": "text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-500 font-semibold rounded-md text-lg w-full sm:w-full px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"}>Search</button>
            </div>
          </form>  
    </div>
  );
}

export default SearchForm;