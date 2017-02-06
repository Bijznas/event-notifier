import React, { Component } from 'react';
import ErrorMessage from './ErrorMessage';

class ErrorMessageList extends Component {

    constructor(props) {
        super(props);
        this.state = { errors: ["wrong name is not expexted."] };
        this.renderErrors = this.renderErrors.bind(this);
        this.removeError = this.removeError.bind(this);
    }

    render() {
        return (
            <div className="HelloWorldList">
                {this.renderErrors()}
            </div>
        );
    }

    renderErrors() {
        return this.state.errors.map(name => (
            <ErrorMessage key={name} name={name} removeError={this.removeError}/>
        ));
    }

    addGreeting(newName) {
        this.setState({ errors: [...this.state.errors, newName] });
    }

    removeError(removeName) {
        const filteredErrors = this.state.errors.filter(name => {
            return name !== removeName;
        });
        this.setState({ errors: filteredErrors });
    }
}

export default ErrorMessageList;