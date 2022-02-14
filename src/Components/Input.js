import React, {Component} from 'react';

class Input extends Component {

    state = {
        pageTitle: 'Input component'
    }

    handkeInput = (event) => {
         this.setState({
             pageTitle: event.target.value
         })
    }

    render() {
        return (
            <div>
                <h1>{this.state.pageTitle}</h1>

                <input type="text" onChange={this.handkeInput} />
            </div>
        )
    }
}

export default Input;