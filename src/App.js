import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import {Provider} from 'react-redux';
import {Container} from 'semantic-ui-react';

import HeaderComponent from './components/Layout/HeaderComponent';
import routes from './routes';
import store from './store';

const switchRoutes = (
    <Switch>
      {routes
          .map((prop, key) => (
              <Route
                  exact
                  path={prop.path}
                  component={prop.component}
                  key={key}
              />
          ))}
    </Switch>
);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Router>
            <Container>
              <HeaderComponent/>
              {switchRoutes}
            </Container>
          </Router>
        </Provider>
    );
  }
}

export default App;
