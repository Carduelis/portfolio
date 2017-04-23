import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent, options) {
  class AuthFork extends Component {
    render() {
      console.log(this.props);
      if (this.props.authenticated) {
        return (
          <ComposedComponent {...this.props} />
        );
      } else {
        return (
          <div>
            Для просмотра необходимо авторизоваться
          </div>
        );
      };
    }
  }
  function mapStateToProps(state) {
    return {
      state: state.auth.login
    }
  }
  return connect(mapStateToProps)(AuthFork);
}
