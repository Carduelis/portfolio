import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Button from '../common/Button';
// import Card from '../common/Card';
import { fetchProject } from '../../actions/firebase';

class ProjectPage extends Component {
  componentWillMount() {
    console.warn(this.props);
    this.props.fetchProject({
      id: this.props.match.params.id
    });
  }
  render() {
    const { title, description } = this.props.project;
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    project: state.project,
    currentProjectId: state.currentProjectId,
    projects: state.cachingProjects
  };
}

export default connect(mapStateToProps, { fetchProject })(ProjectPage);
