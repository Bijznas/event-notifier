import React, { Component } from 'react';
import './Login.css';
import $ from 'jquery';
import ErrorMessage from './ErrorMessage';
import {browserHistory} from 'react-router'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { errors: [] };
        this.renderErrors = this.renderErrors.bind(this);
        this.removeError = this.removeError.bind(this);
        this.addError = this.addError.bind(this);
        this._login = this._login.bind(this);
    }

    render() {
        return (
            <div className="login-page">

                <div className="form">
                    {this.renderErrors()}
                    <form className="register-form">
                        <input type="text" placeholder="name"/>
                        <input type="password" placeholder="password"/>
                        <input type="text" placeholder="email address"/>
                        <button>create</button>
                        <p className="message">Already registered? <a href="#" onClick={this._handleClick}>Sign In</a></p>
                    </form>
                    <form className="login-form" onSubmit={this._login}>
                        <input type="text" placeholder="username" ref="username"/>
                        <input type="password" placeholder="password" ref="password"/>
                        <button>login</button>
                        <p className="message">Not registered? <a href="#" onClick={this._handleClick}>Create an account</a></p>
                    </form>
                </div>
            </div>
        );
    }

    /**
     * Handle the toggling for login and signup page.
     * 
     * @author sanjib
     */
    _handleClick(e) {
        e.preventDefault();
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    }

    /**
     * Handle the login into the system.
     *
     * @author sanjib
     */
    _login(e) {
        e.preventDefault();
        var errorMsg = "Username or password missing.";
        if((this.refs.username.value === "" || this.refs.password.value === "") && this.state.errors.indexOf(errorMsg)  <= -1){
            this.addError(errorMsg);
        }else {
            browserHistory.push('/dashboard');
        }
    }

    /**
     * Render the errors into the dom in case of login failure cases.
     *
     * @author sanjib
     */
    renderErrors() {
        return this.state.errors.map(name => (
            <ErrorMessage key={name} name={name} removeError={this.removeError}/>
        ));
    }

    /**
     * Add error to the dom.
     *
     * @author sanjib
     */
    addError(newName) {
        this.setState({ errors: [...this.state.errors, newName] });
    }

    /**
     * Remove error from the dom.
     *
     * @author sanjib
     */
    removeError(removeName) {
        const filteredErrors = this.state.errors.filter(name => {
            return name !== removeName;
        });
        this.setState({ errors: filteredErrors });
    }
}

export default Login;