import React from 'react';
import DynamicData from "./jsxsyntax/DynamicData";
import ParameterPassing from "./jsxsyntax/ParameterPassing";

/*function Fcomponent(props) {
    return (
        <div className="wrapper">
            <h1>Hello, {props.name}</h1>
        </div>
    );
}*/

//or

/*const Fcomponent = (props) => {
    return (
        <h1>Hello, {props.name}</h1>
    )
}*/

//or

const Fcomponent = (props) => (

    <div className="wrapper">
        <DynamicData/>
        <ParameterPassing name={'Ford'} year={2018} />
        <ParameterPassing name='Audi' year={2016}>
        <p style={{color: 'red'}}>COLOR</p>
        </ParameterPassing>

        <h1>Hello, {props.name}</h1>
    </div>
)

export default Fcomponent;

//or

/*
export default (props) => (
    <div className="wrapper">
        <h1>Hello, {props.name}</h1>
    </div>
)*/
