import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Sidebar from 'react-sidebar';
import Sidebar from '../common/Sidebar';
import Card from '../common/Card';
// import SidebarContent from '../containers/Sidebar';
// dumb components
import Test from '../components/Test';
import HelloWorld from '../components/HelloWorld';

import Header from '../containers/Header';
import AuthModal from '../containers/AuthModal';
import Auth from '../containers/Auth';
import NavListContainer from '../containers/NavListContainer';
import MainWrapper from '../containers/MainWrapper';
import ProjectsList from '../containers/ProjectsList';

import DevTools from './DevTools';
// actions
import {
  toggleColor
} from '../../actions/actions';
// actions
import {
  toggleSidebar
} from '../../actions/interface';
// actions

/** The app entry point */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    };

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  onSetSidebarOpen(sidebarVisibility) {
    // this.setState({ sidebarOpen: sidebarVisibility });
    this.props.toggleSidebar();
  }
  render() {
    // injected by connect call
    const { dispatch, color, data } = this.props;
    const { interfaceState } = this.props;

    const sidebar = (<NavListContainer />);
    return (
      <div className="react-native-web">
        <Header />
        <Sidebar
          rootClassName="root"
          sidebarClassName="sidebar"
          overlayClassName="sidebar-backdrop"
          sidebar={sidebar}
          // open={this.state.sidebarOpen}
          open={interfaceState.sidebarVisibility}
          onSetOpen={this.onSetSidebarOpen}
        />
        <MainWrapper>
          <Test />

          <Card title="Проект" description="Мой первый проект">
          <Auth />
          </Card>
          <ProjectsList />
          <HelloWorld
            onClick={() => dispatch(toggleColor())}
            color={color}
          />
        </MainWrapper>
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
export default connect(select, { toggleSidebar })(App);
