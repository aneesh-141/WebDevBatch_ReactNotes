import React, { Component } from 'react';
import './secondComp.css';

class SecondComp extends Component {
    

    render() { 
        return (
            <React.Fragment>
                <h1 style={{ color:"red", fontSize:"45px"}}>This is The Second Inline CSS Component</h1>

                {/* Comma separated 
                Inside double second Brackets {{}}
                camel case Maintained  */}

                <h1 className='ext'>This is The Second External CSS Component</h1>

            </React.Fragment>
        );
    }
}
 
export default SecondComp;
