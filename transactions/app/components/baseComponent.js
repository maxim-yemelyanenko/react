import React from "react";
import * as loginApi from '../api/login-api';

export default class BaseComponent extends React.Component {
    componentDidMount() {
        loginApi.getUser();
    }
}
