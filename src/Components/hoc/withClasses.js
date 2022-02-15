import React, {Component} from "react";

const withClasses = (Component, className) => {
    return props => {
        return (
            <div className={className}>
                <Component {...props} />
            </div>
        )
    }
}

export default withClasses