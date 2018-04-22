import React from 'react';
import * as loginApi from "../api/login-api";
import BaseComponent from "./baseComponent";

export default class Login extends BaseComponent {
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
    };

    render() {
        return (
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
    }
}