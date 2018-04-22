import React from "react";
import { connect } from 'react-redux';
import BaseComponent from "./baseComponent";

class EnsureLoggedIn extends BaseComponent {
    render() {
        return this.props.children(this.props.loggedIn);
    }
}

const mapStateToProps = function(store) {
    return {
        loggedIn: store.loginState.user.loggedIn
    };
};

export default connect(mapStateToProps)(EnsureLoggedIn);