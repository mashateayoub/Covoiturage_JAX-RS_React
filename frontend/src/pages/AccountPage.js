import React  from 'react'
import {  Link } from 'react-router-dom';
import axios from 'axios';



// SessionStorage

// Persists data for only current active tab of the application.
// Data is reset for new tab in same window.
// Data is cleared when current window is closed.

export default class AccountPage extends React.Component {

    constructor(){
      super()
      this.state={
        queryParams:{
            "login": new URLSearchParams(window.location.search).get('login'),
            "password": new URLSearchParams(window.location.search).get('password'),
            "firstname":new URLSearchParams(window.location.search).get('first name'),
            "lastname":new URLSearchParams(window.location.search).get('last name'),
            "age":new URLSearchParams(window.location.search).get('Age'),
            "phone":new URLSearchParams(window.location.search).get('phone'),
            "email":new URLSearchParams(window.location.search).get('Email'),
        },
        is_created: true
      }
    }


      componentDidMount = () => {

        this.postUser()
        
      }

    postUser = async () => {
            const res= await axios({
                method: "POST",
                url: "http://127.0.0.1:8080/EJB-Client/APIv1.0/clients/",
                data: {
                    "nom": this.state.queryParams.firstname,
                    "prenom":this.state.queryParams.lastname,
                    "age":this.state.queryParams.age,
                    "email":this.state.queryParams.email,
                    "tel": this.state.queryParams.phone,
                    "user": {
                        "login": this.state.queryParams.login,
                        "password": this.state.queryParams.password,
                        "role": "user"
                    }
                },
                headers: { "Content-Type": "Application/json"},
            })

            if(res.status===200){
                sessionStorage.setItem("signuperror", "no")
                let create=true
                this.setState({
                    is_created: create
                })
            }
            else{
                sessionStorage.setItem("signuperror", "yes") 
                let create=false   
                this.setState({
                    is_created: create
                } )
 
            }
        }

    
    render(){
        
            if(this.state.is_created ) return (<div className='flex flex-col justify-center text-center place-items-center h-screen'><p className='text-3xl font-semibold font-serif '>Account created successfully </p> <Link to="/" className='mt-4 rounded text-semibold hover:drop-shadow-lg hover:shadow-cyan-500 px-4 py-2 bg-cyan-500 text-white'>Go Homepage</Link></div> );
            else return(<div className='flex flex-col justify-center text-center place-items-center h-screen'><p className='text-xl text-red-600 font-semibold font-serif '>Error Creating Your Account, try again please !</p><Link to="/signup" className='mt-4 rounded text-semibold hover:drop-shadow-lg hover:shadow-red-500 px-4 py-2 bg-red-500 text-white'>Go Back</Link></div>);
            
       
    }
    
}

