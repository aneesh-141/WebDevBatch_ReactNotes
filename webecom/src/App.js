import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar/navBar';
import Introduction from './Components/Introduction/introDuction';
import LeftFilter from './Components/leftFilters/leftFilters';
import Card from './Components/Card/card';


function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavBar/>
        <Introduction/>
          
        <div style={{marginBottom:"80px", marginLeft:"100px", marginRight:"100px"}}>
          <div className="row">

            <div className="col-md-3" style={{ borderRight: "0.2px solid grey"}}>
              <LeftFilter/>
            </div>


            <div className="col-md-9">
            <ul style={{display:"block"}}>
                                <li style={{display:"inline"}}><strong>SORT BY:</strong></li>
                                <li style={{display:"inline", marginLeft:"20px"}}><a href="#">Price Low to High</a></li>
                                <li style={{display:"inline", marginLeft:"20px"}}><a href="#">Price High to Low</a></li>
                                <li style={{display:"inline", marginLeft:"20px"}}><a href="#">Alphabetically Low to High</a></li>
                                <li style={{display:"inline", marginLeft:"20px"}}><a href="#">Alphabetically High to Low</a></li>
            </ul>
            <hr></hr>

            <div className="row" style={{marginBottom:"20px"}}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>

            </div>
           
          </div>
        </div>   


      </React.Fragment>
    </div>
  );
}

export default App;
