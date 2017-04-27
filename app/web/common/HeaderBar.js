import React, { Component } from 'react';

export default class HeaderBar extends Component {
  render() {
    const { props } = this;
    const headerBarClass = props.fixed ? 'header-bar fixed' : 'header-bar';
    return (
      <div className={headerBarClass}>
        {props.left &&
          <div className="header-bar-left">
            {props.left}
          </div>
        }
        <div className="header-bar-center">
          {props.center}
        </div>
        {props.right &&
          <div className="header-bar-right">
            {props.right}
          </div>
        }
      </div>
    );
  }
}
