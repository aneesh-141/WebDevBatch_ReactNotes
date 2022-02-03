import React, { Component} from 'react';

import './App.css';

//User Created Components
import NavBar from './Components/Navbar/navBar';
import ParentHome from './ParentHome';

import {Route, Routes} from 'react-router-dom';
import Features from './PAGES/FEATURES/Features';
import Pricing from './PAGES/PRICING/Pricing';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ParentHome/>} />
          <Route path="/features" element={<Features/>} />
          <Route path="/pricing" element={<Pricing/>} />
        </Routes>

      </React.Fragment>
    </div>
  );
}

export default App;
