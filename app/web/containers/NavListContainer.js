import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavList from '../containers/NavList';
import { toggleSidebar } from '../../actions/interface';

class NavListContainer extends Component {
  render() {
    const { allItems, firstLevel } = this.props;
    return (
      <div>
        <NavList
          {...this.props}
          idsForShow={firstLevel}
          allItems={allItems}
          handleClick={this.props.toggleSidebar}
        />

      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    firstLevel: state.navigation.itemsForShow,
    allItems: state.navigation.items
  };
}

export default withRouter(connect(mapStateToProps, { toggleSidebar })(NavListContainer));
