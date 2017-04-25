import React, { Component } from 'react';
import { connect } from 'react-redux';
import MdAuth from 'react-icons/lib/md/account-circle';
import MdLoop from 'react-icons/lib/md/loop';

import SpinIt from '../hoc/SpinIt';
import HeaderBar from '../components/HeaderBar';
import { login, authModalToggle } from '../../actions/firebase';

class Header extends Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
  }
  openNavigationBar() {
    console.log('openNavigationBar');
  }
  signIn() {
    console.log('signIn');
    this.props.authModalToggle({
      show: true
    });
  }
  render() {
    const { props } = this;
    const { isAuthenticated, isFetching, user } = props.auth;
    const barProps = {
      headerText: 'Главная',
      left: {
        handleClick: this.openNavigationBar
      },
      right: {
        icon: isFetching ? SpinIt(MdLoop) : MdAuth,
        handleClick: this.signIn,
        label: isAuthenticated ? user.email : null
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
  console.warn(state);
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps, { login, authModalToggle })(Header);
