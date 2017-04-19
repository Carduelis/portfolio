import React, { Component } from 'react';
import Ink from 'react-ink';
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
        <Ink background={false} />
        {props.icon}
        {props.label && <span>{props.label}</span>}
        {props.children}
      </button>
    );
  }
}
