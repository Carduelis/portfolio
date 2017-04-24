import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../common/Button';

import { login } from '../../actions/firebase';

class Header extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      login: '',
      password: '',
      loading: false
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
    return (
      <form onSubmit={e => this.login(e)} className={this.state.loading && "loading"}>
        <div className="input-row">
          <label htmlFor="login">Email</label>
          <input
            onChange={this.onInputChange}
            autoFocus={true}
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
          <Button
            loading={this.state.loading}
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
    state: state.kek
  };
}
export default connect(mapStateToProps, { login })(Header);
