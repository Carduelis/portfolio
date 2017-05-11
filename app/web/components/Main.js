import React, { Component } from 'react';

import MdAllInclusive from 'react-icons/lib/md/all-inclusive';

import Heading from '../components/Heading';

import MyColumns from '../components/MyColumns';
import ProjectsList from '../containers/ProjectsList';
import AboutMe from '../containers/AboutMe';


class Main extends Component {
  toggleProjectList() {
    this.setState({
      count: 40
    });
  }
  render() {
    const separator = (
      <div className="separator">
        <div className="separator-line">
          <MdAllInclusive />
        </div>
      </div>
    );

    return (
      <div>
        <div className="content">
          <AboutMe />
        </div>
        <MyColumns />
        {separator}
        <Heading title="The projects I've created" />
        <div className="content">
          <ProjectsList />
        </div>
      </div>
    );
  }
}

export default Main;
