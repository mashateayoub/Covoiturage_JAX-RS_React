import React from 'react';
import ResponsiveNavBar from "../Partials/Header"
import CardList from '../Partials/CardList';


export default class Ride extends React.Component {

    

render() {
  
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <ResponsiveNavBar />

      {/*  Page content */}
      
      <CardList  />


      {/*  Site footer */}

    </div>
  );
}
}
