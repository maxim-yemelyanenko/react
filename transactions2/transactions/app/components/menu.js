import React from 'react';
import { NavLink } from 'react-router-dom';
import * as loginApi from "../api/login-api";

const Menu = (props) => (
    <div className="app">
        <aside className="primary-aside">
            <ul>
                <li><a onClick={loginApi.logout}>Logout</a></li>
                <li><NavLink exact to="/" activeClassName="active">Back</NavLink></li>
                <li><NavLink exact to="/add" activeClassName="active">Add</NavLink></li>
            </ul>
        </aside>
        <main>
            {props.children}
        </main>
    </div>
);

export default Menu;
