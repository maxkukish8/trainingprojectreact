import React from 'react';

const cars = (props) => (
    <div>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        {props.children}

        <button onClick={props.onChangeTitle}>Click</button>
    </div>
)

export default cars;