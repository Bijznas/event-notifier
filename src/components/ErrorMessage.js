import React, { Component } from 'react';
import './Login.css';

class ErrorMessage extends Component {

    constructor(props) {
        super(props);
        this.removeError = this.removeError.bind(this);
    }


    render() {
        return (
            <div className="error-msg">
                {this.props.name}
                <span onClick={this.removeError}>x</span>
            </div>
        );
    }

    removeError() {
        this.props.removeError(this.props.name);
    }
 }

export default ErrorMessage;