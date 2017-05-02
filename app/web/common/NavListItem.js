import React, { Component } from 'react';
import MdKeyboardArrowRight from 'react-icons/lib/md/keyboard-arrow-right';

// import Ink from 'react-ink';
import ClassName from '../helpers/ClassName';

export default class NavListItem extends Component {
  render() {
    const className = new ClassName('nav-item');
    const { item, isActive } = this.props;
    className.push('link');
    if (isActive) {
      className.push('active');
    }
    return (
      <div className={className.getClass()} onClick={this.props.handleClick} >

        <span className="label">{item.title}, id: {item.id}</span>
        {!isActive && <MdKeyboardArrowRight />}
      </div>
    );
  }
}
