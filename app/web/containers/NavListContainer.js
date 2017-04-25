import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavList from '../containers/NavList';

class NavListContainer extends Component {
  render() {
    const { allItems, firstLevel } = this.props;
    return (
      <NavList idsForShow={firstLevel} allItems={allItems} />
    );
  }
}
function mapStateToProps(state) {
  return {
    firstLevel: state.navigation.itemsForShow,
    allItems: state.navigation.items
  };
}

export default connect(mapStateToProps)(NavListContainer);
