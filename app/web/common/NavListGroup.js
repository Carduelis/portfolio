import React, { Component } from 'react';

export default class NavGroup extends Component {
  render() {
      const { item, children } = this.props;
      return (
        <div className="nav-item-group" key={item.id}>
          <div className="nav-item nav-item-header">{item.title}</div>
          {children}
        </div>
      );
  }
}
