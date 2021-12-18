import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComp from './COMPONENTS/firstComp/firstComp';
import SecondComp from './COMPONENTS/secondComp/secondComp';

class App extends Component {
  
  render() { 
    return (
    <React.Fragment>
     <SecondComp/>
      <FirstComp/>
    </React.Fragment>
);
  }
}

 
export  default App;