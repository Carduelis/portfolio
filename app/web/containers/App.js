import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from '../common/Sidebar';
import Card from '../common/Card';
import Main from '../components/Main';
import Test from '../components/Test';
import ProjectPage from '../containers/ProjectPage';
import HelloWorld from '../components/HelloWorld';
import HeaderBarSubstrate from '../components/HeaderBarSubstrate';

import Header from '../containers/Header';
import Heading from '../components/Heading';
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
        <Heading small title="Curriculum Vitae" />
        <div className="btn-group">
          <a className="btn btn-bordered" download href="/assets/files/en.pdf">
            <span className="label">CV <small>(en)</small></span>
          </a>
          <a className="btn btn-bordered" download href="/assets/files/ru.pdf">
            <span className="label">По-русски</span>
          </a>
        </div>

          <Heading small title="Social Networks" />
          <div className="nav-list">
            <div className="nav-item nav-item-link">
              <a className="label" href="//github.com/Carduelis" target="_blank">Github</a>
            </div>
            <div className="nav-item nav-item-link">
              <a className="label" href="//vk.com/pavepy" target="_blank">Vk.com</a>

            </div>
            <div className="nav-item nav-item-link">
              <a className="label" href="//instagram.com/Carduelis_first" target="_blank">Instagram</a>
            </div>
          </div>
      </div>
    );
    // <NavListContainer />

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
            <Route exact path='/' component={Main} />
            <Route path='/news' component={Test} />
            <Route path='/projects' component={ProjectsList} />
            <Route path='/contacts' component={Auth} />
            <Route path='/projects/:id' component={ProjectPage} />
          </MainWrapper>
            <AuthModal />
        </div>
      </Router>
    );
  }
}

// {!window.__REDUX_DEVTOOLS_EXTENSION__ && <DevTools />}

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
