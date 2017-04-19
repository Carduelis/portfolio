import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../common/Button';
import Card from '../common/Card';
import { fetchProjects } from '../../actions/firebase';
// import Card from '../components/Card';

class ProjectsList extends Component {
  componentWillMount() {
    this.props.fetchProjects();
  }
  onAddProject(e) {
    console.log(e, this);
  }

  renderProjects() {
    console.log(Card, ProjectsList);
    console.log(this.props.projects);
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
        <Button />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

export default connect(mapStateToProps, { fetchProjects })(ProjectsList);
