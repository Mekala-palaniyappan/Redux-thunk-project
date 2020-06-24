import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import UserContainer from "./Container/user";
import UserDetail from "./Container/userDetail";

const Routes = ({history}) => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <UserContainer/>
                </Route>
                <Route exact path="/user/:id">
                    <UserDetail />
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;
