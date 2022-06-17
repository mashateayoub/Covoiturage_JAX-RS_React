import React from "react";
import '../index.css'


export default class  Header extends React.Component{

  constructor(){
    super()
    this.state={
      path:window.location.pathname,
      is_logged: true,
    }
  }
    componentDidMount = () => {
        this.setState({
          is_logged: sessionStorage.getItem("userID")!=null
        });
      
    }

  
  render(){

  

  return (
    <header className="relative text-cyan-400 pt-8 pb-6 ">
    <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
  <a href='/' className="flex title-font  items-center text-cyan-500 mb-4 md:mb-0">
    <img src="https://th.bing.com/th/id/R.43cbe371eab620cc34f430f23b59ae38?rik=msO6LwhDtZ7Z%2bA&pid=ImgRaw&r=0" alt="icon" className="w-16 ml-4"/>
    <span className="ml-3 text-5xl font-extrabold text-black font-serif">Covoit'<span className="text-cyan-500 font-light italic">ici</span></span>
  </a>
  <nav className="md:ml-auto flex flex-wrap items-center font-medium justify-center text-xl">
    <a href='/' className={this.state.path==="/" ? "mr-5 text-cyan-400 border-b-4 border-b-cyan-400 " : "hover:transition-all mr-5 hover:text-cyan-400 hover:border-b-4 hover:border-b-cyan-400"}>Home</a>
<a href='/ride' className={this.state.path.startsWith("/ride") ? "mr-5 text-cyan-400 border-b-4 border-b-cyan-400 " : "hover:transition-all mr-5 hover:text-cyan-400 hover:border-b-4 hover:border-b-cyan-400"}>Ride</a>
{this.state.is_logged ? <a href='/drive' className={this.state.path.startsWith("/drive") ? "mr-5 text-cyan-400 border-b-4 border-b-cyan-400 " : "hover:transition-all mr-5 hover:text-cyan-400 hover:border-b-4 hover:border-b-cyan-400"}>Drive</a>  : " " }
{this.state.is_logged ? <a href='/reservations' className={this.state.path.startsWith("/reservations") ? "mr-5 text-cyan-400 border-b-4 border-b-cyan-400 " : "hover:transition-all mr-5 hover:text-cyan-400 hover:border-b-4 hover:border-b-cyan-400"}>Reservations</a>  : " " }

  </nav>
    {!this.state.is_logged ? <div className='inline-flex justify-center items-center text-xl'><a  href="/signin" className=" mr-5 font-bold text-white bg-cyan-500 hover:bg-cyan-400 border-0 py-1 px-3 focus:outline-none rounded  mt-4 md:mt-0">Connect</a><a  href="/signup" className="font-bold border-2 border-cyan-500 text-cyan-500 hover:text-white hover:border-cyan-400 hover:bg-cyan-400  py-1 px-3 focus:outline-none rounded  mt-4 md:mt-0">Join us</a></div>  : <div className='inline-flex justify-center items-center text-xl'><a  href="/" onClick={()=>{sessionStorage.removeItem("userID")}}  className=" mr-5 font-bold text-white bg-cyan-500 hover:bg-cyan-400 border-0 py-1 px-3 focus:outline-none rounded  mt-4 md:mt-0">Disconnect</a></div> }
    </div>
    </header>
    
  );
  }
}

