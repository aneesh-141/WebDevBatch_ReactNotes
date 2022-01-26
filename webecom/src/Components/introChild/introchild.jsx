import React, { Component } from 'react';

class Introchild extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }

    changeData = (event) => {
        this.props.handleData("YES THIS IS TRUE!")
        event.preventDefault(0);
    }

    render() { 
        return ( 
            <React.Fragment>
            <h3>Tap to confirm</h3>
                <p className="lead">
                        <a className="btn btn-primary btn-lg" role="button" onClick={this.changeData}>Click</a>
                </p>
            </React.Fragment>
         );
    }
}
 
export default Introchild;