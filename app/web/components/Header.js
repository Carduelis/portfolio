import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Auth from '../containers/Auth';
import { login, logout } from '../../actions/firebase';

class Header extends Component {
  login(e) {
    e.preventDefault();
    this.props.login('pavepy@gmail.com', 'sx9UkQFpFirebase');
  }
  doLogout(e) {
    e.preventDefault();
    this.props.logout();
  }
  render() {
    return (
      <div className="header">
        <Card title="Проект" description="Мой первый проект">
          <Auth />
        </Card>
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
