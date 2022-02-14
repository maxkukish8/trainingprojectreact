import React, {Component} from "react";

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            submit: '',
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
            submit: this.state.input
        })
    }

    handleSubmit2(event) {
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
                    <input type="text" onChange={this.handleChange}/>
                    <h5>Controlled input:</h5>
                    <h3>{this.state.input}</h3>
                </div>

                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.input} onChange={this.handleChange}/>
                        <button type="submit">Submit!</button>
                    </form>

                    <h3>{this.state.submit}</h3>
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

export default FormComponent;