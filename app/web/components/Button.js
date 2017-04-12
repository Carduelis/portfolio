import React, { Component } from 'react';

import ClassName from '../helpers/ClassName';


export default class Button extends Component {
  render() {
    const className = new ClassName('btn');
    const { props } = this;
    const htmlType = props.submit ? 'submit' : 'button';
    const attrs = props.attrs || {};
    if (props.type) {
      className.push(props.type);
    }
    if (props.size) {
      className.push(props.size);
    }
    if (props.filled || props.fill) {
      className.push('fill');
    }
    if (props.styles) {
      props.styles.map(classPart => className.push(classPart));
    }
    return (
      <button
        className={className.getClass()}
        onClick={e => props.handleClick(e)}
        type={htmlType}
        {...attrs}
      >
          {props.icon}{props.label}
      </button>
    );
  }
}
