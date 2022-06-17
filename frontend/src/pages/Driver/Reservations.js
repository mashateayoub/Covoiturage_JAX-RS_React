import React from "react";
import Header from '../../Partials/Driver/Header'
import axios from "axios";
import ResCard from "../../utils/Driver/ResCard";




class Reservations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            con: sessionStorage.getItem("id_con"),
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
                axios({
                    method: "GET",
                    url: "http://127.0.0.1:8080/EJB-Client/APIv1.0/annonces/",
                    headers: { "Content-Type": "Application/json" },
                }).then((res2) => {
                    if (res2.status === 200) {
                        let liste = []
                        for (let offer in res2.data) {
                            if (res2.data[offer].con === parseInt(this.state.con)) {
                                liste.push(res2.data[offer].id_annonces)
                            }
                        }
                        let lst = []
                        for (let reserv in res.data) {
                            if (liste.includes(res.data[reserv].id_annonces)) {
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
        })

    }


    render() {
        console.log(this.state.data)
        return (
            <div className="min-h-full">
                <Header />
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">Reservations</h1>
                    </div>
                </header>
                <main className="mt-7 overflow-x-auto mx-auto max-w-7xl">
                    <div className='p-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 align-middle'>
                        {this.state.is_loaded ? this.state.data.map((item) => (<ResCard key={item.id} item={item} />)) : <div className='flex justify-center py-8'><img src='https://www.svgrepo.com/show/314685/spinner-solid.svg' className='animate-spin w-24 ' alt=" " /></div>}
                    </div>
                </main>


            </div>
        );
    }
}

export default Reservations;