import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router-dom';

import ReactNativeWebHelloWorld from './App';


export default class Root extends Component {
  render() {
    /* eslint-disable no-underscore-dangle */
    return (
      <Provider store={this.props.store}>
        <Router history={browserHistory}>
          <Route path="/" component={ReactNativeWebHelloWorld} />
        </Router>
      </Provider>
    );
    /* eslint-enable */
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
