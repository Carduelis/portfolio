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
      password: ''
    };
  }
  componentWillMount() {
    console.log(this);
  }
  onInputChange(ev) {
    const statePart = {};
    statePart[ev.target.name] = ev.target.value;
    this.setState(statePart);
  }
  login(e) {
    e.preventDefault();
    this.setState({
      loading: true
    });
    this.props.login(this.state.login, this.state.password);
  }
  render() {
    const { isFetching, isAuthenticated, user } = this.props.auth;
    if (isAuthenticated) {
      return (
        <div>
            {user.email}
            <Button label="Logout" handleClick={this.props.logout} />
        </div>
      );
    }
    return (
    <form onSubmit={e => this.login(e)} className={isFetching && 'loading'}>
      <div className="input-row">
        <label htmlFor="login">Email</label>
        <input
          autoFocus
          onChange={this.onInputChange}
          className="input"
          name="login"
          type="text"
          value={this.state.login}
        />
      </div>
      {this.props.auth.error.message}
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
        <Button
          loading={isFetching}
          fill
          submit
          label="Login"
        />
      </div>
    </form>
  );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps, { login, logout })(Header);
