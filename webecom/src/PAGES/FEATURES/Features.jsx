import react from 'react';
import React, { Component } from 'react';
import Context from './Feature_Components/Context';

class Features extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:0
        }
        this.setNewNumber = this.setNewNumber.bind(this)
    }

    setNewNumber(){
        this.setState({ data: this.state.data + 1})
    }
   
    render() { 
        return ( 
            <react.Fragment>
               <button onClick={this.setNewNumber}>INCREMENT</button>
               <Context myNumber = {this.state.data}></Context>
            </react.Fragment>
         );
    }
}
 
export default Features;