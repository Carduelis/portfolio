import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Box, Columns, Icons, Button } from 'grommet';
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
        <Box key={project.title} direction="row">
          <Card
            heading={project.title}
            description={project.description}
          />
        </Box>
      )
    );
  }

  render() {
    return (
      <div>
        <Columns justify="center" size="small">
          {this.renderProjects()}
        </Columns>
        <Box
          pad='medium'
          colorIndex='light-2'
        >
          <Button
            icon={<Icons.Base.Add />}
            label='Label'
            onClick={e => this.onAddProject(e)}
            plain={false}
            accent={false}
            secondary={false}
            primary={false}
          />
        </Box>
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
