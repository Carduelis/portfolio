import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../common/Button';

import { login, logout } from '../../actions/firebase';

class Header extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      login: '',
      password: '',
      tags: [
        { label: 'kek', id: 1234 },
        { label: 'lkek', id: 1235 },
        { label: 'ksdfek', id: 1236 },
      ]
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
  onTagClick(sev, ev, tag) {
    console.log(sev, ev, tag);
  }
  onInputChange(ev) {
    const statePart = {};
    statePart[ev.target.name] = ev.target.value;
    this.setState(statePart);
  }
  render() {
    return (
      <form onSubmit={e => this.login(e)}>
        <div className="input-row">
          <label htmlFor="login">Email</label>
          <input
            onChange={this.onInputChange}
            className="input"
            name="login"
            type="text"
            value={this.state.login}
          />
        </div>
        <div className="input-row">
          <label htmlFor="password">Password</label>
          <input
            onChange={this.onInputChange}
            className="input"
            name="password"
            type="password"
            value={this.state.password}
          />
        </div>
        <div className="input-row" style={{ width: 500 }}>
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
