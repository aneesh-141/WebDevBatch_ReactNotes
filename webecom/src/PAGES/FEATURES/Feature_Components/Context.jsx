import React, { Component } from 'react';

// LIFE CYCLE METHODS: 7 + Constructor 
class Context extends Component {

    componentWillMount(){
        console.log("Stage e uthbey componentWillMount"); 
        //window.alert("WILL MOUNT")
    }

    componentDidMount(){
        console.log("Stage e dariyea ache componentDidMount"); 
        //window.alert("DID MOUNT")
    }

    componentWillReceiveProps(newProps){
        console.log("LOADING........................ DATA ASCHEY! COMPONENT WILL RECEIVE PROPS"); 
    }
   
    shouldComponentUpdate(newProps, newState){
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("DataPeyegechi Darao Updating..........COMPONENT WILL UPDATE"); 
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Got the Data. I am Updated. COMPONENT DID UPDATE"); 
    }

    componentWillUnmount(){
        console.log("Tata am done COMPONENT WILL UNMOUNT!"); 
    }


    render() { 
        return ( 
            <React.Fragment>
                <h3>{this.props.myNumber}</h3>
            </React.Fragment>
         );
    }
}
 
export default Context;