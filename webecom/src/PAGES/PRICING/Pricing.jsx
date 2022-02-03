import react from 'react';
import React, { Component } from 'react';
import FirstFunction from './Pricing_Components/FirstFunction/FirstFunction';

class Pricing extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <react.Fragment>
                <h1>This is the Pricing APP Page (HOOKS)</h1>
                <FirstFunction/>
            </react.Fragment>
         );
    }
}
 
export default Pricing;