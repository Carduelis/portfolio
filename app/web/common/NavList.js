import React, { Component } from 'react';

export default class NavList extends Component {
  render() {
      return (
        <div className="nav-list">
          {this.props.children}
        </div>
      );
  }
}
