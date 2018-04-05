import React from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as loginApi from '../api/login-api';
import BaseComponent from "./baseComponent";

class EnsureLoggedIn extends BaseComponent {
    render() {
        switch (this.props.loggedIn){
            case true: return this.props.children;
            case false: return <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />;
            default: return null;
        }
    }
}

const mapStateToProps = function(store) {
    return {
        loggedIn: store.loginState.user.loggedIn
    };
};

export default connect(mapStateToProps)(EnsureLoggedIn);