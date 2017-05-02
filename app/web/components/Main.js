import React, { Component } from 'react';
import ProjectsList from '../containers/ProjectsList';
import AboutMe from '../containers/AboutMe';

class Main extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <h2>About me</h2>
          <AboutMe />
          <h2>Projects</h2>
        </div>
        <div className="content">
          <ProjectsList />
        </div>
      </div>
    );
  }
}

export default Main;
