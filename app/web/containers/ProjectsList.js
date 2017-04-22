import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../common/Button';
import Card from '../common/Card';
import { fetchProjects, addProject } from '../../actions/firebase';
// import Card from '../components/Card';

class ProjectsList extends Component {
  componentWillMount() {
    this.props.fetchProjects();
  }
  onAddProject(e) {
    this.props.addProject();
  }

  renderProjects() {
    const projectsData = this.props.projects;
    return projectsData.map(project => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
          />
      )
    );
  }
  render() {
    return (
      <div>
        <div>
          {this.renderProjects()}
        </div>
        <Button handleClick={this.onAddProject} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

export default connect(mapStateToProps, { fetchProjects, addProject })(ProjectsList);
