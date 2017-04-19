import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MdLocalOffer from 'react-icons/lib/md/local-offer';

export default class Tag extends Component {
  render() {
    console.log(this.props);
    let icon = <MdLocalOffer {...this.props.iconProps} />;
    if (typeof this.props.icon !== 'undefined') {
      icon = this.props.icon;
    }
    if (this.props.noIcon) {
      icon = false;
    }

    return (
      <span className="tag" onClick={this.props.handleClick}>
        {icon}<span className="text">{this.props.label}</span>
      </span>
    );
  }
}

Tag.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.element
  ])
};
