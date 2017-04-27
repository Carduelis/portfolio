import React, { Component } from 'react';
import Button from '../common/Button';


export default class ButtonBar extends Component {
  render() {
    const { props } = this;
    const Buttons = props.labels.map((label, i) => {
      const isActive = i === props.active;
      const buttonStyle = isActive
        ? { ...props.defaultButtonStyle }
        : { ...props.activeButtonStyle };
      return (
        <Button
          key={i}
          label={label}
          {...buttonStyle}

        />
      );
    });
    return (
      <div className="btn-group">
        {Buttons}
      </div>
    );
  }
}
