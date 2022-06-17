import React  from 'react'
import {  Link } from 'react-router-dom';
import axios from 'axios';

export default class AccountDriverPage extends React.Component {

    constructor(){
      super()
      this.state={
        "login":sessionStorage.getItem("userID").split('@')[1],
        "password": sessionStorage.getItem("userID").split('@')[2],
        "driver":{},
        "is_logged":false
      }
    }


      componentDidMount = () => {

        this.postUser()
        
      }

    postUser = async () => {
      const res= await axios({
        method: "GET",
        url: "http://127.0.0.1:8080/EJB-Client/APIv1.0/users/"+this.state.login,
        headers: { "Content-Type": "Application/json"},
    })
      if(res.status===200 && res.data.con !== 0){
        sessionStorage.setItem("id_con", res.data.con )
        this.setState({
        driver: res.data,
        is_logged: true
      })}
      else{
        this.setState({
          is_logged: false
        })
        }
    }

    
    render(){
        
            if(this.state.is_logged ) return (<div className='flex flex-col justify-center text-center place-items-center h-screen'><p className='text-3xl font-semibold font-serif '>Logged in successfully </p> <Link to="/driver" className='mt-4 rounded text-semibold hover:drop-shadow-lg hover:shadow-cyan-500 px-4 py-2 bg-cyan-500 text-white'>Access Driver's Platforme</Link></div> );
            else return(<div className='flex flex-col justify-center text-center place-items-center h-screen'><p className='text-xl text-red-600 font-semibold font-serif '>Error in Logging to your driver account, try again please !</p><Link to="/drive" className='mt-4 rounded text-semibold hover:drop-shadow-lg hover:shadow-red-500 px-4 py-2 bg-red-500 text-white'>Go Back</Link></div>);
            
       
    }
    
}

