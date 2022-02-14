import React, {Component} from 'react';
import ParameterPassing from "./jsxsyntax/ParameterPassing";

class Ccomponent extends Component {

    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2016},
            {name: 'BMW', year: 2020}
        ],
        pageTitle: 'Class component'
    }

    changeTitleHandler = () => {

        const oldTitle = this.state.pageTitle

        const newTitle = oldTitle + ' (changed)'

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
                <h1 style={{color: 'green', fontSize: '40px'}}><strong>{this.state.pageTitle}</strong> <span>{this.props.numbers.join('*')}</span></h1>

                <button onClick={this.changeTitleHandler}>Change title</button>

                <h2>Hello {this.props.name}</h2>

                <ParameterPassing
                    name={cars[0].name}
                    year={cars[0].year}
                    onChangeTitle={this.changeTitleHandler}
                />
                <ParameterPassing
                    name={cars[1].name}
                    year={cars[1].year} />
                <ParameterPassing
                    name={cars[2].name}
                    year={cars[2].year} />
            </div>
        );
    }
}

export default Ccomponent;
Ccomponent.defaultProps = { name: "Klein" }