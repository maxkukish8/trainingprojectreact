import React, {Component} from "react";

class ChangeNameComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visibility: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            visibility: !state.visibility
        }));
    }

    render() {
        if (this.state.visibility) {
            return (
                <div>
                    <h1>Now you see me</h1>
                    <button onClick={this.handleClick}>Click</button>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>There is something hidden here</h1>
                    <button onClick={this.handleClick}>Click to see</button>
                </div>
            );
        }
    }
}

export default ChangeNameComponent;