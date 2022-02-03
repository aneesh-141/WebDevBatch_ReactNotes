import React, { Component } from 'react';
import './navBar.css';

import {Link} from 'react-router-dom'

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
                        {/* <a className="nav-link active" href="/">Home</a>
                        <a className="nav-link" href="/features">Features</a>
                        <a className="nav-link" href="/pricing">Pricing</a>
                        <a className="nav-link disabled">Disabled</a> */}

                        <Link className="nav-link active" exact to="/">Home</Link>
                        <Link className="nav-link" exact to="/features">Features</Link>
                        <Link className="nav-link" exact to="/pricing">Pricing</Link>
                        </div>
                    </div>
                    </nav>
            </React.Fragment>
         );
    }
}
 
export default NavBar;