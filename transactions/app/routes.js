import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Transactions from "./components/transactions";
import Add from "./components/add";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Transactions} />
        <Route exact path="/add" component={Add} />
        <Route path="/" render={() => <Redirect to="/"/>}/>
    </Switch>
)

export default Routes;
