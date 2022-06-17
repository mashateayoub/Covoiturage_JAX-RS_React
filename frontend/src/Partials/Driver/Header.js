import React from 'react'

export default function Header() {
  return (
    <nav className="bg-cyan-500 py-4">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-8 w-8 rounded" src="https://th.bing.com/th/id/R.43cbe371eab620cc34f430f23b59ae38?rik=msO6LwhDtZ7Z%2bA&pid=ImgRaw&r=0" alt="Workflow" />
          </div>
            <div className="ml-10 flex flex-row items-baseline space-x-4">
              <a href="/driver  " className="text-white hover:bg-white hover:text-cyan-600 px-3 py-2 rounded-md text-lg font-medium" aria-current="page">Dashboard</a>

              <a href="/driver/offers  " className="text-white hover:bg-white hover:text-cyan-600  px-3 py-2 rounded-md text-lg font-medium">Offers</a>

              <a href="/driver/requests  " className="text-white hover:bg-white hover:text-cyan-600  px-3 py-2 rounded-md text-lg font-medium">Available Requests</a>
              <a href="/driver/reservations  " className="text-white hover:bg-white hover:text-cyan-600  px-3 py-2 rounded-md text-lg font-medium">Reservations</a>
              <a href="/driver/profile  " className="text-white hover:bg-white hover:text-cyan-600  px-3 py-2 rounded-md text-lg font-medium">Profile</a>
 </div>
        </div>
        <div className="">
          <div className="ml-4 flex items-center md:ml-6">
            <div className="ml-3 relative">
              <div>
              <a href="/ride" className="text-white hover:bg-white hover:text-cyan-600  px-3 py-2 rounded-md text-lg font-medium">Back to Rider </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}
