import React from 'react';
import { Switch, Route as ReactDOMRoute, Redirect } from 'react-router-dom';
import { Route } from './Route';
import { SignIn, SignUp, Dashboard } from '../pages';

const Routes: React.FC = () => (
  <Switch>
    <ReactDOMRoute path="/" exact>
      <Redirect to="/signin" />
    </ReactDOMRoute>
    <Route component={SignIn} path="/signin" />
    <Route component={SignUp} path="/signup" />
    <Route isPrivate component={Dashboard} path="/dashboard" />
  </Switch>
);

export default Routes;
