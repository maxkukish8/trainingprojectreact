import React, {Component} from 'react';
import ParameterPassing from "./jsxsyntax/ParameterPassing";

class PassingParametersToFunction extends Component {

    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2016},
            {name: 'BMW', year: 2020}
        ],
        pageTitle: 'React component'
    }

    changeTitleHandler = (newTitle) => {
        this.setState({
            pageTitle: newTitle
        })
    }

    render() {
        const divStyle = {
            marginTop: '10px'
        }

        const cars = this.state.cars

        return (
            <div className="ClassAttr" style={divStyle}>
                <h1>{this.state.pageTitle}</h1>

                <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>Change title</button>

                <ParameterPassing
                    name={cars[0].name}
                    year={cars[0].year}
                    onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
                />
                <ParameterPassing
                    name={cars[1].name}
                    year={cars[1].year}
                    onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
                />
                <ParameterPassing
                    name={cars[2].name}
                    year={cars[2].year}
                    onChangeTitle={() => this.changeTitleHandler(cars[2].name)}
                />
            </div>
        );
    }
}

export default PassingParametersToFunction;