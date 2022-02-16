import React from "react";
import {ClickedContext} from "../CounterComponent";

const fn = () => {
    return (
        <div style={{
            border: '1px solid white',
            width: '300px',
            margin: '10px auto 40px'
        }}>
            <h3>Counter 2</h3>
            <ClickedContext.Consumer>
                {clicked => clicked ? <p>Clicked</p> : null}
            </ClickedContext.Consumer>
        </div>
    )
}

export default fn;