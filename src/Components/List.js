import React, {Component} from 'react';
import ParameterPassing from "./jsxsyntax/ParameterPassing";

class List extends Component {

    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2016},
            {name: 'BMW', year: 2020}
        ],
        pageTitle: 'List component'
    }

    changeTitleHandler = (newTitle) => {
        this.setState({
            pageTitle: newTitle
        })
    }


    render() {

        return (
            <div>
                <h1>{this.state.pageTitle}</h1>

                { this.state.cars.map((car, index) => {
                    return (
                        <ParameterPassing
                            key={index}
                            name={car.name}
                            year={car.year}
                            onChangeTitle={() => this.changeTitleHandler(car.name)}
                        />
                    )
                }) }
            </div>
        )
    }
}

export default List;