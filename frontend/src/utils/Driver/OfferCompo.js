import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class OfferCompo  extends React.Component {

    constructor(props){
        super(props)
        this.state={
            offer:props.offer,
            is_deleted: false
        }
      }
      componentWillReceiveProps(props) {
        this.setState({offer: props.offer});
    }

    handleDelete =  () => {
        axios({
            method: "DELETE",
            url: "http://127.0.0.1:8080/EJB-Client/APIv1.0/annonces/"+this.state.offer.id_annonces,
            headers: { "Content-Type": "Application/json"},
        }).then((res) =>{
            if(res.status===200){
                this.setState({
                    is_deleted: true
                })
                alert(" Offer deleted Successfully :) ")
                window.location.href = "/driver/offers";
            }
        })
        




    }



    render(){
        let d = this.state.offer.date_depart.split("Z")[0].split("-")
        return (
            <tr tabindex="0" className=" bg-white focus:outline-none h-16 border border-gray-100 rounded mb-4">
    
            <td className="pl-8 text-gray-700">
                <div className="flex items-center pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                    <p className="text-base font-medium leading-none  mr-2">{this.state.offer.ville_depart}</p>
                </div>
            </td>
            <td className=" text-gray-700">
                <div className="flex items-center pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
                    <p className="text-base font-medium leading-none  mr-2">{this.state.offer.ville_arrivee}</p>
                </div>
            </td>
            
            <td>
                <div className="flex items-center  text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                    <p className="py-3 px-3 text-sm focus:outline-none leading-none  italic font-semibold rounded">{this.state.offer.prix} DH</p>
                </div>
            </td>
            <td>
                <div className="flex items-center pl-2 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <p className="py-3 px-3 text-sm focus:outline-none leading-none  font-semibold rounded"> {this.state.offer.nombre_places} </p>
                </div>
            </td>
            <td></td>
    
    
            <td className="pl-2">
            <div className="flex items-center pl-2">
                    <p className="py-3 px-3 text-sm focus:outline-none leading-none text-cyan-700 bg-cyan-100 rounded">Due {(parseInt(d[2]))+"/"+d[1]+"/"+d[0]}</p>
                </div>
            </td>
    
            <td className="flex flow-row py-5 ">
                <div className=" pl-2 pt-1">
                    <Link to={{
                            pathname: "/driver/UpdateOffer",
                            search: "?id="+this.state.offer.id_annonces,
                            state: { fromDashboard: true }
                        }} className="pt-2 pb-3 px-3  text-sm focus:outline-none leading-none text-white  bg-gray-500 rounded hover:bg-green-500">Edit</Link>
                </div>
                <div className=" pl-2 ">
                    <button  onClick={this.handleDelete} className=" py-3 px-3 text-sm focus:outline-none leading-none text-white bg-gray-500 rounded hover:bg-red-500">Delete</button>
                </div>
            </td>
        </tr>
      );

    }
 
}
