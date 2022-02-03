//HOOKS are the new additional features introduced into the functional component to provide it the powers of a class component so that 
// class components can be avoided. 

import react from 'react';
import React, { Component } from 'react';
import {useState} from 'react'; // a hook 

function FirstFunction(){

    //const[name, setName] = useState("Aneesh");
    // const[age, setAge] = useState("21");
    // const[year, setYear] = useState("4th");


    const [info, setInfo] = useState(
        {
           name: "Aneesh",
           age: 21, 
           year: "4th" 
        }
    );

    const updateName = () =>{
        setInfo(previousState => {
            return {...previousState, name:"Kar"}
        });
    }

    return(
        <React.Fragment>
            <h1>Hello my name is {info.name}. I am {info.age} years old. I am a {info.year} year student</h1>
            <button type='button' onClick={updateName}>
                Change Name
            </button>
        </React.Fragment>
    );
}

export default FirstFunction; 

//------------------------------------------------------------------