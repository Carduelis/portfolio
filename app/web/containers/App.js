import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// dumb components
import Header from '../containers/Header';
import AuthModal from '../containers/AuthModal';
import Test from '../components/Test';
import Card from '../common/Card';
import Auth from '../containers/Auth';
import HelloWorld from '../components/HelloWorld';
import NavList from '../common/NavList';
import ProjectsList from '../containers/ProjectsList';
import DevTools from './DevTools';
// actions
import {
  toggleColor
} from '../../actions/actions';
// actions

/** The app entry point */
class App extends Component {
  render() {
    // injected by connect call
    const { dispatch, color, data } = this.props;

    return (
      <div className="react-native-web">
        <Header />
        <Test />
        <NavList />
        <Card title="Проект" description="Мой первый проект">
          <Auth />
        </Card>
        <ProjectsList />
        <HelloWorld
          onClick={() => dispatch(toggleColor())}
          color={color}
        />
        <AuthModal />
        {!window.__REDUX_DEVTOOLS_EXTENSION__ && <DevTools />}
      </div>
    );
  }
}

App.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // color: PropTypes.string.isRequired,
  // data: PropTypes.object.isRequired,
};

const select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
