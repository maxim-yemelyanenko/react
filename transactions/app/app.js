import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Routes from "./routes";
import Login from "./components/login";
import EnsureLoggedIn from './components/ensureLoggedIn';
import Menu from './components/menu';
import * as bankApi from "./api/bank-api";

export default class App extends React.Component {
    componentDidMount() {
        bankApi.getBanks();
    }

    render() {
        return (
            <Switch>
                <Route path="/login" component={Login}/>
                <EnsureLoggedIn>
                    <Menu>
                        <Routes/>
                    </Menu>
                </EnsureLoggedIn>
            </Switch>
        );
    }
}
