import React, { Component } from 'react';
import { connect } from 'react-redux';
import MdAuth from 'react-icons/lib/md/account-circle';
import HeaderBar from '../components/HeaderBar';
import { login, logout, authModalToggle } from '../../actions/firebase';

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
    const isLogged = !(props.auth.login === false);
    const barProps = {
      headerText: 'Главная',
      left: {
        handleClick: this.openNavigationBar
      },
      right: {
        icon: isLogged ? MdAuth : MdAuth,
        handleClick: isLogged ? this.props.logout : this.signIn,
        label: isLogged ? props.auth.email : null
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
export default connect(mapStateToProps, { logout, login, authModalToggle })(Header);
