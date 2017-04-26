import React, { Component } from 'react';
import { connect } from 'react-redux';

import ClassName from '../helpers/ClassName';

class Sidebar extends Component {

  render() {
    const className = new ClassName('sidebar');
    if (this.props.visibility) {
      className.push('active');
    }
    return (
      <div className={className.getClass()}>
        <div className="sidebar-content">
          {this.props.children}
        </div>
        <div className="sidebar-backdrop" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    visibility: state.controls.sidebar.visibility
  };
}

export default connect(mapStateToProps)(Sidebar);
