import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainWrapper extends Component {
  render() {
    return <div className="main-content">{this.props.children}</div>;
  }
}

function mapStateToProps(state) {
  return {
    interfaceState: state.interfaceState
  };
}

export default connect(mapStateToProps)(MainWrapper);
