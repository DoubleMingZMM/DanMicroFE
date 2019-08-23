/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Daniel
 * @Date: 2019-08-23 15:46:58
 * @LastEditors: Daniel
 * @LastEditTime: 2019-08-23 18:39:58
 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Bundle from './Bundle';

import Login from 'bundle-loader?lazy&name=login!@/views/login';
import Page1 from 'bundle-loader?lazy&name=page1!@/views/page1';
import Page2 from 'bundle-loader?lazy&name=page2!@/views/page2';
import Dashboard from 'bundle-loader?lazy&name=dashboard!@/views/Index';

const createComponent = (component) => (props) => (
  <Bundle load={component}>
    {
      (Component) => (Component ? <Component {...props} /> : '')
    }
  </Bundle>
);

const getRouter = () => (
  /* A <Router> may have only one child element */
  <Switch>
    <Route component={createComponent(Dashboard)}
      path="/react/dashboard"
    />
    <Route component={createComponent(Page1)}
      path="/page1"
    />
    <Route component={createComponent(Page2)}
      path="/page2"
    />
    <Route path="*"
      render={() => (<Redirect to="/react/dashboard" />)}
    />
  </Switch>
);

const getNoAppRouter = () => (
  /* A <Router> may have only one child element */
  <Switch>
    <Route component={createComponent(Login)}
      path="/react/login"
    />
    <Route path="*"
      render={() => (<Redirect to="/react/login" />)}
    />
  </Switch>
);

module.exports = {
  getRouter
  // getNoAppRouter
};
