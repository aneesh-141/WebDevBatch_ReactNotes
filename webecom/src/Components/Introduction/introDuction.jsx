import React, { Component } from 'react';
import Introchild from '../introChild/introchild';
import './introDuction.css'; 

class Introduction extends Component {
   
    constructor() {
        super();

        this.state = { 
            "name":"WebEcom!",
            "para1": "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
            "introchildpara":"Nabarun is an idiot!"
         }

    }

    changeState = () =>{
        this.setState({"name":"Nabarun!"});
    }

    handCallback = (childData)=>{
        this.setState({"introchildpara": childData});
    }

    render() { 
        return ( 
            <React.Fragment>
               
               <div className="jumbotron">
                    <h1 className="display-4">{this.state.name}</h1>
                    <p className="lead">{this.state.para1}</p>
                    <hr className="my-4"></hr>
                    <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                    <p>{this.state.introchildpara}</p>
                    <hr></hr>
                       <Introchild handleData = {this.handCallback}/>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" role="button" onClick={this.changeState}>Change Name</a>
                    </p>
                
                    </div>

            </React.Fragment>
         );
    }
}
 
export default Introduction;

