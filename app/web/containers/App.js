import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from '../common/Sidebar';
import Card from '../common/Card';
import Test from '../components/Test';
import HelloWorld from '../components/HelloWorld';
import HeaderBarSubstrate from '../components/HeaderBarSubstrate';

import Header from '../containers/Header';
import AuthModal from '../containers/AuthModal';
import Auth from '../containers/Auth';
import NavListContainer from '../containers/NavListContainer';
import MainWrapper from '../containers/MainWrapper';
import ProjectsList from '../containers/ProjectsList';


import DevTools from './DevTools';
import { toggleColor } from '../../actions/actions';
import { toggleSidebar } from '../../actions/interface';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { sidebarOpen: false };
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
    const sidebar = (
      <div>
        <HeaderBarSubstrate />
        <NavListContainer />
      </div>
    );

    return (
      <Router>
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
            <Route exact path='/' component={Test} />
            <Route path='/news' component={ProjectsList} />
            <Route path='/contacts' component={Auth} />
          </MainWrapper>
            <AuthModal />
            {!window.__REDUX_DEVTOOLS_EXTENSION__ && <DevTools />}
        </div>
      </Router>
    );
  }
}


// <Test />
//
// <Card title="Проект" description="Мой первый проект">
// <Auth />
// </Card>
// <ProjectsList />
// <HelloWorld
//   onClick={() => dispatch(toggleColor())}
//   color={color}
// />

App.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // color: PropTypes.string.isRequired,
  // data: PropTypes.object.isRequired,
};

const select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select, { toggleSidebar })(App);
// export default App;
