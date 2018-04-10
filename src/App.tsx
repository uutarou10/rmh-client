import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import store from './store';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import { Container } from 'semantic-ui-react';
// import { Route } from 'react-router';
// import Main from './components/view/Main/index';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Container>
            <p>hello</p>
          </Container>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
