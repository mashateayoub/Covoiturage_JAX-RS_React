import React from "react";


class BookedVer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            resID: new URLSearchParams(window.location.search).get('resID'),

        }
    }

    render() { 
        return ( 
            <div class="flex flex-col container  rounded px-6 mx-auto my-48 py-24 bg-gray-50 ">
                <div class="flex flex-wrap justify-start mb-10 ml-32 " >
                <a href="/" class="flex flex-row px-7 py-3 bg-cyan-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg  transition duration-150 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                 Go Home </a>
                </div>
            <section class=" text-gray-800 text-center lg:text-left">
            
                <div class="flex flex-wrap justify-center">
                <div class="grow-0 shrink-0 basis-auto w-full lg:w-10/12 px-3">
                    <div class="grid lg:grid-cols-2 gap-x-6 items-center">
                    <div class="mb-10 lg:mb-0">
                        <h2 class="text-3xl font-bold">
                        Congratulations
                        <br />
                        <span class="text-cyan-600 text-2xl">Save this ID for verification & wait for the driver's confirmation</span>
                        </h2>
                    </div>

                    <div class="mb-6 md:mb-0">
                        <div class="md:flex flex-row">
                        <input
                            type="text"
                            class="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                            value={this.state.resID}
                            readOnly
                        />
                        <button
                            type="submit"
                            class="flex flex-row  px-7 py-3 bg-cyan-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg  transition duration-150 ease-in-out"
                            onClick={() => {navigator.clipboard.writeText(this.state.resID)
                                            alert("ID copied Successfully :)")
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            Copy
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>


            </div>



         )
    }
}
 
export default BookedVer;
