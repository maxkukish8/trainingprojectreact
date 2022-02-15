import React, {Component} from "react";
import Aux from "./hoc/Aux";

class CounterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            title: 'Counter component and Fragments'
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }
    decrement() {
        this.setState(state => ({
            count: state.count - 1
        }));
    }
    reset() {
        this.setState({
            count: 0
        });
    }

    render() {

        return (
            <>
                <h1>{this.state.title}</h1>

                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.reset}>reset</button>
                <h2>Current: {this.state.count}</h2>
            </>
        )

        /*or*/

        /*return (
            <Aux>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.reset}>reset</button>
                <h1>Current: {this.state.count}</h1>
            </Aux>
        )*/

        /*or*/

        /*return (
            <Fragment>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.reset}>reset</button>
                <h1>Current: {this.state.count}</h1>
            </Fragment>
        )*/

        /*or*/

        /*return [
                <button key={'1'} onClick={this.increment}>increment</button>,
                <button key={'2'} onClick={this.decrement}>decrement</button>,
                <button key={'3'} onClick={this.reset}>reset</button>,
                <h1 key={'4'} >Current: {this.state.count}</h1>
        ]*/
    }
}

export default CounterComponent;