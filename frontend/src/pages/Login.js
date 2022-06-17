import React  from 'react'
import {  Link } from 'react-router-dom';
import axios from 'axios';

export default class Login extends React.Component {

    constructor(){
      super()
      this.state={
        user:{},
        queryParams:{
            "login": new URLSearchParams(window.location.search).get('login'),
            "password": new URLSearchParams(window.location.search).get('password'),
        },
        is_logged: true
      }
    }
      componentDidMount = () => {

        this.fetchItems()
        
      }

    fetchItems = async () => {
    
        const res = await axios.get('http://127.0.0.1:8080/EJB-Client/APIv1.0/users/'+this.state.queryParams.login);
        const item = res.data;

        if ( item!=null && item.login===this.state.queryParams.login &&  this.state.queryParams.password === item.password && item.role==="user" ){
            sessionStorage.setItem("userID", "@"+item.login+"@"+item.password)
            sessionStorage.setItem("loggingerror", "no")
            this.setState({
                user: item,
                is_logged: true
            });
        }
        else {
            sessionStorage.setItem("loggingerror", "yes")
            this.setState({
                is_logged: false
            });
        }

        
    }

    
    render(){
        
            if(this.state.is_logged ) return (<div className='flex flex-col justify-center text-center place-items-center h-screen'><p className='text-3xl font-semibold font-serif '>Logged In successfully </p> <Link to="/" className='mt-4 rounded text-semibold hover:drop-shadow-lg hover:shadow-cyan-500 px-4 py-2 bg-cyan-500 text-white'>Go Homepage</Link></div> );
            else return(<div className='flex flex-col justify-center text-center place-items-center h-screen'><p className='text-xl text-red-600 font-semibold font-serif '>Error signing in </p><Link to="/signin" className='mt-4 rounded text-semibold hover:drop-shadow-lg hover:shadow-red-500 px-4 py-2 bg-red-500 text-white'>Go Back</Link></div>);
            
       
    }
    
}

