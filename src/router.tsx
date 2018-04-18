import * as React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import Main from './components/view/Main';
import Join from './components/view/Join';
import RequireJoin from './components/utils/RequireJoin';

export default () => (
  <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/join" component={Join} />
        <RequireJoin>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </RequireJoin>
        <Route component={NotFound} />
      </Switch>
  </ConnectedRouter>
);

const NotFound = () => (
  <p>not found</p>
);