import React, { Component } from 'react'

export default class Card extends Component {
  
  
  
    
    render() {
    
    const {con,
      date_depart,
      id_annonces,
      nombre_places,
      prix,
      ville_arrivee,
      ville_depart,
      time} = this.props.item
      let t =new Date(time.split("T")[0]+" "+time.split("T")[1].split("Z")[0])
      let d = date_depart.split("Z")[0].split("-")
      let path =nombre_places!==0 ? "/ride/offer?id="+id_annonces :"#"
      let bg= nombre_places!==0  ?"hover:bg-green-100 ": "hover:bg-red-100"
    return (
      <div class=" mx-auto w-full"  onClick={()=>{ if(nombre_places===0 ){alert("No places left in this Offer X(")}}}>

    
      <div className='bg-white cursor-crosshair'>
      
      <div class={" rounded cursor-auto px-3 py-4 shadow md:flex justify-between "+bg}  >
      <a href={sessionStorage.getItem("userID")!==null ? path : "/signin"} className=''>
        <div >
            <h4 class="text-2xl font-semibold" >{ville_depart}</h4>
          
          <p class="my-2 text-lg" >{ville_arrivee} 
          </p>
          <div class="flex items-center mt-4" >
            <div class=" text-xs uppercase font-bold tracking-wider bg-gray-300 inline-flex px-2 py-1 rounded mr-2" >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span> {prix} DH</span>
                      </div>
            <div class="text-xs uppercase font-bold tracking-wider bg-gray-300 inline-flex px-2 py-1 rounded mr-2" >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span> {d[0]+"/"+d[1]+"/"+(parseInt(d[2])+1)}</span>
            
                      </div>

                      <div class="text-xs uppercase font-bold tracking-wider bg-gray-300 inline-flex px-2 py-1 rounded mr-2" >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 mr-1 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
            <span> {t.toLocaleTimeString() }</span>
                      </div>
          </div>
          
        </div>
        </a>
      </div>

      </div>

        </div>
              
    )
  }
}
