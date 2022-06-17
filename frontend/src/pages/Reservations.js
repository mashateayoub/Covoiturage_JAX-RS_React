import React from "react";
import ResponsiveNavBar from "../Partials/Header"
import ResCard from "../utils/Driver/ResCard";
import axios from 'axios';


class Reservations extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            login: sessionStorage.getItem("userID").split('@')[1],
            is_loaded: false
        }
    }

    componentDidMount = () => {
        this.fetchRes()
    }

    fetchRes = () => {

        axios({
            method: "GET",
            url: "http://127.0.0.1:8080/EJB-Client/APIv1.0/reservations/",
            headers: { "Content-Type": "Application/json" },
        }).then((res) => {
            if (res.status === 200) {
                let lst = []
                for (let reserv in res.data) {
                    if (res.data[reserv].userlogin === this.state.login) {
                        lst.push(res.data[reserv])
                    }
                }
                this.setState({
                    data: lst,
                    is_loaded: true
                })

            }
        })

    }
    render() {
        return (
            <div className="flex flex-col min-h-screen overflow-hidden">

                {/*  Site header */}
                <ResponsiveNavBar />

                {/*  Page content */}
                <main>
                    <div className="mx-auto bg-cyan-800 py-6 px-22 sm:px-26 lg:px-28">
                        <h1 className="text-3xl font-bold text-white">Hi 👋  , this is your reservations</h1>
                    </div>

                    <div className="mx-auto px-12 bg-gray-50 min-h-screen " >

                        {!this.state.is_loaded ? <div className='flex justify-center py-8'><img src='https://www.svgrepo.com/show/314685/spinner-solid.svg' className='animate-spin w-24 ' alt=" " /></div> : this.state.data.length !== 0 ? <div className='p-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 align-middle'> {this.state.data.map((item) => (<ResCard key={item.id} item={item} />))}</div> : <p className='flex text-lg justify-center py-8 text-semibold font-sans' > 😔  Sorry, no reservations found for you. </p>}

                    </div>
                </main>
                {/*  Site footer */}

            </div>
        );
    }
}

export default Reservations;