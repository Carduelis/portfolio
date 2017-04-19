import React, { Component } from 'react';
import { connect } from 'react-redux';
import MdMenu from 'react-icons/lib/md/menu';
import MdSearch from 'react-icons/lib/md/search';

import Button from '../common/Button';

export default class HeaderBar extends Component {
  showNaviBar() {

  }
  showSearch() {

  }
  render() {
    const buttonProps = {
      size: 'sm',
      transparent: true,
    };
    const { props } = this;
    const menuIcon = <MdMenu size={32} />;
    const searchIcon = <MdSearch size={32} />;
    return (
      <div className="header-bar-substrate">
        <div className="header-bar fixed">
          {props.left &&
            <Button
              {...buttonProps}
              handleClick={props.left.handleClick}
              icon={props.left.icon || menuIcon}
            />
          }
          <h2>{props.headerText}</h2>
          {props.right &&
            <Button
              {...buttonProps}
              handleClick={props.right.handleClick}
              icon={props.right.icon || searchIcon}
            />
          }
        </div>
      </div>
    );
  }
}
