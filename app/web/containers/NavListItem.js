import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavListItem from '../common/NavListItem';
import { NavLink, withRouter } from 'react-router-dom';

class cNavListItem extends Component {
  render() {
    const isActive = this.props.activeItem === this.props.item.id;
    return (
      <NavLink to={this.props.item.to}>
        <NavListItem {...this.props} isActive={isActive} />
      </NavLink>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeItem: state.navigation.activeItem,
  };
}

export default connect(mapStateToProps)(cNavListItem);
