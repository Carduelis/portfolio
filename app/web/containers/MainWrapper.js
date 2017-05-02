import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MainWrapper extends Component {
  render() {
    return (
      <div className="main-content-wrapper">
        <div className="main-content">

          {this.props.children}
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    interfaceState: state.interfaceState
  };
}

export default withRouter(connect(mapStateToProps)(MainWrapper));
