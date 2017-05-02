import React, { Component } from 'react';
import Ink from 'react-ink';
import ClassName from '../helpers/ClassName';

class Input extends Component {
  inputRender(props) {
    switch (this.props.type) {
      case 'textarea':
        return (<textarea {...props} />);
      default:
        return (<input {...props} />);

    }
  }
  render() {
    const { label, name, formId } = this.props;
    const uniqId = `${name}-${formId}`;
    const props = Object.assign({}, this.props, {
      id: uniqId,
      className: 'input'
    });
    return (
      <div className="input-row">
        <label htmlFor={uniqId}>{label}</label>
        <div className="input-wrapper">
          {this.inputRender(props)}
        </div>
      </div>
    );
  }
}

export default Input;
