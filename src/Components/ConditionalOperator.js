import React, {Component} from 'react';
import ParameterPassing from "./jsxsyntax/ParameterPassing";

class ConditionalOperator extends Component {

    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2016},
            {name: 'BMW', year: 2020}
        ],
        pageTitle: 'List component',
        showCars: false
    }

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    changeTitleHandler = pageTitle => {
        this.setState({pageTitle})
    }


    render() {

        let cars = null

        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <ParameterPassing
                        key={index}
                        name={car.name}
                        year={car.year}
                        onChangeTitle={() => this.changeTitleHandler(car.name)}
                    />
                )
            })
        }

        return (
            <div>
                <h1>{this.state.pageTitle}</h1>

                <button onClick={this.toggleCarsHandler}>Toggle cars</button>

                { cars }
            </div>
        )
    }
}

export default ConditionalOperator;


/*це інший спосіб виводу*/

/*
class ConditionalOperator extends Component {

    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2016},
            {name: 'BMW', year: 2020}
        ],
        pageTitle: 'List component',
        showCars: false
    }

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    changeTitleHandler = pageTitle => {
        this.setState({pageTitle})
    }

    render() {

        return (
            <div>
                <h1>{this.state.pageTitle}</h1>

                <button onClick={this.toggleCarsHandler}>Toggle cars</button>

                { this.state.showCars
                    ? this.state.cars.map((car, index) => {
                        return (
                            <ParameterPassing
                                key={index}
                                name={car.name}
                                year={car.year}
                                onChangeTitle={() => this.changeTitleHandler(car.name)}
                            />
                        )
                    })
                    : null
                }
            </div>
        )
    }
}

export default ConditionalOperator;
*/
