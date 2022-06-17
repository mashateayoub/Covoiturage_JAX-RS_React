import React, {useLayoutEffect} from 'react';
import { Link } from 'react-router-dom';
import Header from '../Partials/Header';


function SignIn() {

  useLayoutEffect(() => {
    sessionStorage.removeItem("loggingerror")
    
  });

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-50  to-white">
          <div className="max-w-6xl mx-auto font-sans ">
            <div className="pt-4 pb-12 md:pt-22 md:pb-32">

              {/* Page header */}
              <div className="max-w-3xl mx-auto py-10 text-center ">
                <h1 className="text-5xl font-extrabold  text-black  ">Welcome back. We exist to make your life <span className='text-cyan-500'>easier.</span></h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
              <form method='GET' action='/login'>
                    <div>{(sessionStorage.getItem("loggingerror")!=null && !sessionStorage.getItem("loggingerror").localeCompare("yes"))? <p className='text-red-500'>Error signing in</p> : " "}</div>
                    
                    <div class="relative z-0 mb-6 mt-4 w-full group">
                        <input type="text" name="login" class="block py-2.5 px-0 w-full text-lg font-semibold  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" " required />
                        <label for="email" class="absolute text-lg font-semibold  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Login</label>
                    </div>
                    <div class="relative z-0 mb-6 w-full group">
                        <input type="password" name="password" id="floating_password" class="block py-2.5 px-0 w-full text-lg font-semibold  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" " required />
                        <label for="password" class="absolute text-lg font-semibold  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <button type="submit" class="text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-500 font-semibold rounded-md text-lg w-full sm:w-full px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">Submit</button>
                  </form>
                <div className="flex items-center my-6 ">
                  <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
                  <div className="text-gray-600 italic font-semibold">Or</div>
                  <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
                </div>
                <div className="text-gray-600 text-center mt-6 drop-shadow-xl font-semibold">
                  Don’t you have an account? <Link to="/signup" className="text-cyan-600 hover:underline transition duration-150 ease-in-out">Sign up</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  )
  
}

export default SignIn;