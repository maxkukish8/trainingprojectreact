import React, {Component} from 'react';
import Car from "./jsxsyntax/Car";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Aux from "./hoc/Aux";
import PropTypes from 'prop-types';

class DynamicLists extends Component {

    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2016},
            {name: 'BMW', year: 2020}
        ],
        pageTitle: 'Dynamic List Component',
        showCars: false
    }

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    onChangeName(name, index) {
        const car = this.state.cars[index]
        car.name = name
        const cars = [...this.state.cars]
        cars[index] = car
        this.setState({cars})
    }

    deleteHandler(index) {
        let cars = this.state.cars.concat()
        cars.splice(index, 1)
        this.setState({cars})
    }

    render() {

        let cars = null

        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <ErrorBoundary key={index}>
                        <Car
                            name={car.name}
                            year={car.year}
                            index={index}
                            onDelete={this.deleteHandler.bind(this, index)}
                            onChangeName={event => this.onChangeName(event.target.value, index)}
                        />
                    </ErrorBoundary>

                )
            })
        }

        return (
            <Aux>
                <h1>{this.state.pageTitle}</h1>
                <button onClick={this.toggleCarsHandler}>Toggle cars</button>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    { cars }
                </div>
            </Aux>
        )
    }
}

DynamicLists.propTypes = {
    name: PropTypes.string,
    year: PropTypes.number,
    onDelete: PropTypes.func,
    onChangeName: PropTypes.func
}

export default DynamicLists;
