import React, { Component } from 'react';
import { connect } from 'react-redux';
import MdAuth from 'react-icons/lib/md/account-circle';
import MdMenu from 'react-icons/lib/md/menu';
import MdClose from 'react-icons/lib/md/close';
import MdLoop from 'react-icons/lib/md/loop';

import SpinIt from '../hoc/SpinIt';
import HeaderBar from '../components/HeaderBar';
import { login, authModalToggle } from '../../actions/firebase';
import { toggleSidebar } from '../../actions/interface';

class Header extends Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
  }
  signIn() {
    console.log('signIn');
    this.props.authModalToggle({
      show: true
    });
  }
  render() {
    // const icon = sidebarVisibility ? MdClose : MdMenu;

    // MorphIcon = <MdClose />;
    const { props } = this;
    const { sidebarVisibility } = props;
    const { isAuthenticated, isFetching, user } = props.auth;
    const barProps = {
      headerText: 'Главная',
      left: {
        icon: sidebarVisibility ? MdClose : MdMenu,
        handleClick: this.props.toggleSidebar
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
    sidebarVisibility: state.interfaceState.sidebarVisibility,
    auth: state.auth
  };
}
export default connect(mapStateToProps, { login, authModalToggle, toggleSidebar })(Header);
