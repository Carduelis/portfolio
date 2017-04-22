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
    const leftIcon = props.left.icon ? <props.left.icon size={32} /> : <MdMenu size={32} />;
    const rightIcon = props.right.icon ? <props.right.icon size={32} /> : <MdSearch size={32} />;

    return (
      <div className="header-bar-substrate">
        <div className="header-bar fixed">
          {props.left &&
            <Button
              {...buttonProps}
              handleClick={props.left.handleClick}
              icon={leftIcon}
            />
          }
          <h2>{props.headerText}</h2>
          {props.right &&
            <Button
              {...buttonProps}
              handleClick={props.right.handleClick}
              icon={rightIcon}
            />
          }
        </div>
      </div>
    );
  }
}
