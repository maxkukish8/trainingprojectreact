import React, {Component} from "react";
import classes from './newStyles.css';
import Radium from "radium";


export default class InlineStyles extends Component {

    constructor(props) {
        super(props)

        this.state = {
            appTitle: 'Cars'
        }
    }

    titleChangeHandler(title) {
        this.setState({
            appTitle: title
        })
    }

    render() {

        const inputClasses = [classes.input]

        if (this.state.appTitle !== '') {
            inputClasses.push(classes.green)
        } else {
            inputClasses.push(classes.red)
        }

        if (this.state.appTitle.length > 4) {
            inputClasses.push(classes.bold)
        }

        const styleBlock = {
            boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '10px',
            display: 'block',
            ':hover': {
                border: '4px solid #aaa',
                boxShadow: '0 4px 15px 0 white',
                cursor: 'pointer'
            }
        }

        return (
            <div className={classes.newStyles} style={styleBlock}>
                <h2>{this.state.appTitle}</h2>
                <input
                    type="text"
                    value={this.state.appTitle}
                    onChange={(event) => this.titleChangeHandler(event.target.value)}
                    className={inputClasses.join(' ')}
                />
            </div>
        )
    }

}

InlineStyles = Radium(InlineStyles);

/*
join - метод, який перетворює масив в строку, так як className читає лише строку.
*/
