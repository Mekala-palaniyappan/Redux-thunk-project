import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import UserContainer from './Container/user';
import UserDetail from './Container/userDetail';
import PostDetail from './Container/postDetail';

const Routes = ({ history }) => (
  <Router history={history}>
    <Switch>
      <Route exact path="/">
        <UserContainer />
      </Route>
      <Route exact path="/user/:id">
        <UserDetail />
      </Route>
      <Route exact path="/user/:id/post/:id">
        <PostDetail />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
