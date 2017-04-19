import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// dumb components
import Header from '../components/Header';
import Test from '../components/Test';
import Card from '../common/Card';
import Auth from '../containers/Auth';
import HelloWorld from '../components/HelloWorld';
import ProjectsList from '../containers/ProjectsList';
import DevTools from './DevTools';
// actions
import {
  toggleColor
} from '../../actions/actions';

/** The app entry point */
class ReactNativeWebHelloWorld extends Component {
  render() {
    // injected by connect call
    const { dispatch, color, data } = this.props;

    return (
      <div className="react-native-web">
        <Header />
        <Test />
        <Card title="Проект" description="Мой первый проект">
          <Auth />
        </Card>
        <ProjectsList />
        <HelloWorld
          onClick={() => dispatch(toggleColor())}
          color={color}
        />
        {!window.__REDUX_DEVTOOLS_EXTENSION__ && <DevTools />}
      </div>
    );
  }
}

ReactNativeWebHelloWorld.propTypes = {
  dispatch: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  // data: PropTypes.object.isRequired,
};

const select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select)(ReactNativeWebHelloWorld);
