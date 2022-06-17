import React  from 'react'
import {  Link } from 'react-router-dom';
import axios from 'axios';

export default class AccountDriverPage extends React.Component {

    constructor(){
      super()
      this.state={
        queryParams:{
            "adresse":new URLSearchParams(window.location.search).get('adress') ,
            "age":new URLSearchParams(window.location.search).get('Age') ,
            "email":new URLSearchParams(window.location.search).get('Email') ,
            "immatriculation":new URLSearchParams(window.location.search).get('matricule'),
            "marque":new URLSearchParams(window.location.search).get('Marque') ,
            "nom":new URLSearchParams(window.location.search).get('first name') ,
            "nombre_places":new URLSearchParams(window.location.search).get('nbrplaces') ,
            "prenom":new URLSearchParams(window.location.search).get('last name') ,
            "sexe":new URLSearchParams(window.location.search).get('sexe') ,
            "tel":new URLSearchParams(window.location.search).get('phone') ,
            "user":{
                "login":sessionStorage.getItem("userID").split('@')[1],
                "password": sessionStorage.getItem("userID").split('@')[2],
                "role":"user"
            }    

        },
        is_created: false
      }
    }


      componentDidMount = () => {

        this.postUser()
        
      }

    postUser = async () => {
            const res= await axios({
                method: "POST",
                url: "http://127.0.0.1:8080/EJB-Client/APIv1.0/conducteurs/",
                data: {
                    "adresse":this.state.queryParams.adresse ,
                    "age":this.state.queryParams.age ,
                    "email":this.state.queryParams.email ,
                    "immatriculation":this.state.queryParams.immatriculation,
                    "marque":this.state.queryParams.marque ,
                    "nom":this.state.queryParams.nom ,
                    "nombre_places":this.state.queryParams.nombre_places ,
                    "prenom":this.state.queryParams.prenom ,
                    "sexe":this.state.queryParams.sexe ,
                    "tel":this.state.queryParams.tel ,
                    "userlogin":this.state.queryParams.user.login
        
                },
                headers: { "Content-Type": "Application/json"}
            })

            if(res.status===200){
                console.log(res)
                const res2= await axios({
                    method: "PUT",
                    url: "http://127.0.0.1:8080/EJB-Client/APIv1.0/users/",
                    data: {
                        "login":this.state.queryParams.user.login,
                        "password": this.state.queryParams.user.password,
                        "role":"user",
                        "con":res.data.id
            
                    },
                    headers: { "Content-Type": "Application/json"}
                })
                if(res2.status===200){

                sessionStorage.setItem("driversignuperror", "no")                
                sessionStorage.setItem("id_con", res.data.id )
                let create=true
                this.setState({
                    is_created: create
                })
            }else{
                sessionStorage.setItem("driversignuperror", "yes") 
                let create=false   
                this.setState({
                    is_created: create
                } )
            }
            }
            else{
                sessionStorage.setItem("driversignuperror", "yes") 
                let create=false   
                this.setState({
                    is_created: create
                } )
 
            }
        }

    
    render(){
        
            if(this.state.is_created ) return (<div className='flex flex-col justify-center text-center place-items-center h-screen'><p className='text-3xl font-semibold font-serif '>Driver Account created successfully </p> <Link to="/driver" className='mt-4 rounded text-semibold hover:drop-shadow-lg hover:shadow-cyan-500 px-4 py-2 bg-cyan-500 text-white'>Access Driver's Platforme</Link></div> );
            else return(<div className='flex flex-col justify-center text-center place-items-center h-screen'><p className='text-xl text-red-600 font-semibold font-serif '>Error Creating Your Account, try again please !</p><Link to="/driver/signup" className='mt-4 rounded text-semibold hover:drop-shadow-lg hover:shadow-red-500 px-4 py-2 bg-red-500 text-white'>Go Back</Link></div>);
            
       
    }
    
}

