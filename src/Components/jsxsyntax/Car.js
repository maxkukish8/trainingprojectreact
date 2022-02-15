import React, {Fragment} from 'react';
import withClasses from "../hoc/withClasses";
import classes from '../newStyles.css';

class Car extends React.Component {
    render() {

        /*if (Math.random() > 0.7 ) {
            throw new Error('Car random failed')
        }*/

        return (
            <Fragment>
                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input type="text" onChange={this.props.onChangeName} value={this.props.name}/>
                <button onClick={this.props.onDelete}>Delete</button>
            </Fragment>
        )
    }

}

export default withClasses(Car, classes.Car);