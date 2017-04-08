import React, { Component } from 'react';
import { connect } from 'react-redux';
import MdAdd from 'react-icons/lib/md/add';
import Button from '../components/Button';

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
        <div className="input-row" style={{ width: 500 }}>
          <Button
            fill
            type="success"
            size="lg"
            label="Kesdfsk"
            handleClick={(e) => console.log(e.currentTarget.type)}
          />
          <button className="btn" type="submit">
            Login
          </button>
          <button className="btn" type="submit">Кексимус максимус</button>
          <button className="btn btn-danger">Удалить</button>
          <button className="btn btn-success"><MdAdd />Создать</button>
          <button className="btn btn-warning">Уверены?</button>
          <button className="btn btn-lg"><MdAdd />Big Passion Button</button>
          <button className="btn btn-sm"><MdAdd />Little But</button>
          <button className="btn btn-fill">Basic filled</button>
          <button className="btn btn-accent">Важная кнопка</button>
          <button className="btn btn-fill btn-success">Создать</button>
          <button className="btn" type="submit">Кексимус максимус</button>
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
