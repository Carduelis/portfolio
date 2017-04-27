import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavList from '../containers/NavList';
import { toggleSidebar } from '../../actions/interface';

class NavListContainer extends Component {
  render() {
    const { allItems, firstLevel } = this.props;
    return (
      <NavList idsForShow={firstLevel} allItems={allItems} handleClick={this.props.toggleSidebar} />
    );
  }
}
function mapStateToProps(state) {
  return {
    firstLevel: state.navigation.itemsForShow,
    allItems: state.navigation.items
  };
}

export default connect(mapStateToProps, { toggleSidebar })(NavListContainer);
