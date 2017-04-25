import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavListItem from '../common/NavListItem';


class cNavListItem extends Component {
  render() {
    const isActive = this.props.activeItem === this.props.item.id;
    return (
        <NavListItem {...this.props} isActive={isActive} />
    );
  }
}

function mapStateToProps(state) {
  return {
    activeItem: state.navigation.activeItem,
  };
}

export default connect(mapStateToProps)(cNavListItem);
