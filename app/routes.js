/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import TablePage from './containers/TablePage';

export default () => (
  <App>
    <Switch>
      <Route path="/table/:bitcoin" component={TablePage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
