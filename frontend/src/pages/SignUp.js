import React,{useLayoutEffect} from 'react';
import { Link } from 'react-router-dom';
import Header from '../Partials/Header';


function SignUp() {
  useLayoutEffect(() => {
    sessionStorage.removeItem("signuperror")
    
  });
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
     <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-8 pb-8 md:pt-12 md:pb-15">

              {/* Page header */}
              <div className="max-w-3xl mx-auto pb-12 text-center  ">
                <h1 className="text-5xl font-black  text-black  ">Create your account today,<br/> save money and time later ! </h1>
              </div>
              {/* Form */}
              <div className="mx-auto">
              <div>{(sessionStorage.getItem("signuperror")!=null && !sessionStorage.getItem("signuperror").localeCompare("yes"))? <p className='text-red-500 py-4'>Error creating your account</p> : " "}</div>
                <form className='grid grid-cols-1 sm:grid-cols-3 gap-6' method='GET' action='/createacc'>

                <div class="relative z-0 mb-6 w-full group">
                        <input type="text" name="login" class="block py-2.5 px-0 w-full text-lg font-semibold  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" " required />
                        <label for="login" class="absolute text-lg font-semibold  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Login</label>
                    </div>
                    <div class="relative z-0 mb-6 w-full group">
                        <input type="password" name="password" id="floating_password" class="block py-2.5 px-0 w-full text-lg font-semibold  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" " required />
                        <label for="password" class="absolute text-lg font-semibold  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <br />
                <div class="relative z-0  mb-6  w-full group">
                        <input type="text" name="first name" class="block py-2.5 w-full text-lg font-semibold  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" " required />
                        <label for="first name" class="absolute text-lg font-semibold  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
                    </div>
                <div class="relative z-0  mb-6  w-full group">
                        <input type="text" name="last name" class="block py-2.5 w-full text-lg font-semibold  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" " required />
                        <label for="last name" class="absolute text-lg font-semibold  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
                    </div>
                    <br />
                <div class="relative z-0  mb-6  w-full group">
                        <input type="number" name="Age" class="block py-2.5 w-full text-lg font-semibold  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" " required />
                        <label for="Age" class="absolute text-lg font-semibold  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age</label>
                    </div>

                <div class="relative z-0  mb-6  w-full group">
                        <input type="number" name="phone" class="block py-2.5 w-full text-lg font-semibold  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" " required />
                        <label for="phone" class="absolute text-lg font-semibold  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                    </div>
                    
                    <div class="relative z-0  mb-6 w-full group ">
                        <input type="mail" name="Email"  class="block py-2.5 w-full text-lg font-semibold  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" " required />
                        <label for="Email" class="absolute text-lg font-semibold  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Business Email</label>
                    </div>


                    <button type="submit" class="mt-4 text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-500 font-semibold rounded-md text-lg w-full sm:w-full px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">Join Now</button>
                  <div className="text-sm text-gray-500 text-left align-middle mt-3">
                    By creating an account, you agree to the <a className="underline" href="/Terms">terms & conditions</a>, and our <a className="underline" href="/Terms">privacy policy</a>.
                                </div>
                </form>
                <div className="flex items-center my-6">
                  <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
                  <div className="text-gray-600 italic">Or</div>
                  <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
                </div>
                <div className="text-gray-600 text-center mt-6 drop-shadow-xl font-semibold">
                Already using Covoit'ici ? <Link to="/signin" className="text-cyan-600 hover:underline transition duration-150 ease-in-out">Sign in</Link>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default SignUp;