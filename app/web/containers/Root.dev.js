import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';

export default class Root extends Component {
  render() {
    /* eslint-disable no-underscore-dangle */
    return (
      <Provider store={this.props.store}>
        <Router>
          <Route path='/' component={App} />
        </Router>
      </Provider>
    );
    /* eslint-enable */
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
