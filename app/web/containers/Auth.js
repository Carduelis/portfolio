import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../../actions/firebase';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      login: '',
      password: ''
    };
  }
  componentWillMount() {
    console.log(this);
  }
  login(e) {
    e.preventDefault();
    this.props.login(this.state.login, this.state.password);
  }
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }
  render() {
    return (
      <form onSubmit={e => this.login(e)}>
        <div className="input-row">
          <label htmlFor="login">Email</label>
          <input
            onChange={e => this.setState({ login: e.target.value })}
            className="input"
            name="login"
            type="text"
            value={this.state.login}
          />
        </div>
        <div className="input-row">
          <label htmlFor="password">Password</label>
          <input
            onChange={e => this.setState({ password: e.target.value })}
            className="input"
            name="password"
            type="password"
            value={this.state.password}
          />
        </div>
        <div className="input-row">
          <button className="btn" type="submit">
            Login
          </button>
          <button className="btn" type="button" onClick={e => this.logout(e)}>
            Logout
          </button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.kek
  };
}
export default connect(mapStateToProps, { logout, login })(Header);
