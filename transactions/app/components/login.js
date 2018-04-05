import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as loginApi from "../api/login-api";
import BaseComponent from "./baseComponent";

class Login extends BaseComponent {
    constructor() {
        super();

        this.state = {
            userName: "",
            password: ""
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        loginApi.login(this.state.userName, this.state.password);
    }

    render() {
        switch (this.props.loggedIn){
            case true:
                let fromPath = '/'
                try { fromPath = this.props.location.state.from.pathname; } catch (ex) { }
                return <Redirect to={{ pathname: fromPath }} />;
            case false: return (
                <div className="login-page">
                    <form onSubmit={this.handleSubmit}>
                        <table><tbody>
                            <tr><td>User:</td><td><input type="text" value={this.state.userName} onChange={e => this.setState({ userName: e.target.value })} /></td></tr>
                            <tr><td>Password:</td><td><input type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} /></td></tr>
                            <tr><td colSpan={2}><button disabled={!this.state.userName || !this.state.password}>Login</button></td></tr>
                        </tbody></table>
                    </form>
                </div>
            );
            default: return null;
        }
    }
}

const mapStateToProps = function(store) {
    return {
        loggedIn: store.loginState.user.loggedIn
    };
};

export default connect(mapStateToProps)(Login);