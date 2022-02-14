import React, {Component} from "react";

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            items: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            input : event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            submit: this.state.input,
            items: [...this.state.items, this.state.input]
        })
    }

    render() {
        return(
            <div>

                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.input} onChange={this.handleChange}/>
                        <button type="submit">Submit!</button>
                    </form>
                </div>

                <ul>
                    {this.state.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ToDo;