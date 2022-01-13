import React, { Component } from 'react';
import './navBar.css';

class NavBar extends Component {
    render() { 
        return ( 
            <React.Fragment>
               <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                        <a className="navbar-brand" href="#" style={{color:"white", fontWeight:"bolder"}}>WebEcom!</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-link" href="#">Features</a>
                        <a className="nav-link" href="#">Pricing</a>
                        <a className="nav-link disabled">Disabled</a>
                        </div>
                    </div>
                    </nav>
            </React.Fragment>
         );
    }
}
 
export default NavBar;