import React, {Component} from 'react';

class Scomponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Arnold'
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            name: 'Yor new name is Jack'
        })
    }

    render() {
        const name = this.state.name
        return (
            <div>
                <h2>Hey, {name}</h2>
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}

export default Scomponent;