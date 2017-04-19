import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderBar from './HeaderBar';
import { login, logout } from '../../actions/firebase';

class Header extends Component {
  render() {
    const barProps = {
      headerText: 'Главная',
      left: {

      },
      right: {

      }
    };
    return (
      <div className="header">
        <HeaderBar {...barProps} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.kek
  };
}
export default connect(mapStateToProps, { logout, login })(Header);
