import * as React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import Main from './components/view/Main';
import Join from './components/view/Join';

export default () => (
  <ConnectedRouter history={history}>
    <React.Fragment>
      <Route exact={true} path="/" component={Main} />
      <Route exact={true} path="/join" component={Join} />
    </React.Fragment>
  </ConnectedRouter>
);
