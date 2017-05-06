import React, { Component } from 'react';
import { connect } from 'react-redux';
import MdLocalOffer from 'react-icons/lib/md/local-offer';

import Button from '../common/Button';
import Modal from '../common/Modal';
import Card from '../common/Card';
import ProjectAdd from '../containers/ProjectAdd';
import Project from '../containers/Project';
import Tags from '../common/Tags';
import Grid from '../common/Grid';
import { fetchProjects, addProject } from '../../actions/firebase';
// import Card from '../components/Card';

class ProjectsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: false
    };
  }
  componentWillMount() {
    this.props.fetchProjects();
  }
  onAddProject(e) {
    this.props.addProject();
  }

  renderProjects() {
    const projectsData = this.props.projects;
    return projectsData.map((project, i) => (
          <Card
            key={i + project.title}
            title={project.title}
            description={project.description}
          />
      )
    );
  }
  transformCard(id) {
    this.setState({
      activeProject: id
    });
  }
  render() {
    // const tags = [
    //   {
    //     key: 1,
    //     label: 2015,
    //   }, {
    //     key: 2,
    //     label: 'Design',
    //   }, {
    //     key: 3,
    //     label: 'Front-end',
    //   }
    // ];
    const projects = this.props.projects;
		const projects_sortedKeys = this.props.projects_sortedKeys;
    const mapData = projects;
    const { activeProject } = this.state;
    // Object.keys(projects).map(key => {
    //   const item = projects[key];
    //   if (key === activeProject) {
    //     return Object.assign({}, item, {
    //         size: 'lg'
    //     });
    //   }
    //   return item;
    // });
    const mapFunction = (project, iteratee) => {
			const id = projects_sortedKeys[iteratee];
      let tags = false;
      if (typeof project.tags === 'string') {
        tags = project.tags.split(', ').map((label, key) => ({ key, label }));
      }
      const to = `/projects/${id}`;
      const cover = project.cover || `assets/project_images/${project.image}`;
      return (
        <div
          className="pointer"
          key={to}
          onClick={() => this.transformCard(id)}
        >
          <Card
            title={project.title}
            _to={to}
            thumbnail={project.thumbnail}
            cover={cover}
            description={project.description}
          >
          {tags && <Tags tags={tags} />}
          </Card>
        </div>
      );
    };

    const mapArray = projects_sortedKeys.map(item => mapData[item]);
    const gridProps = {
      classNames: ['kek'],
      mapFunction,
      mapArray,
    };
    const project = projects[activeProject] || {};
		if (activeProject) {
			project.id = projects[activeProject].id;
		}
    return (
      <div>
        <Modal
          title={project.title}
          size="lg"
          subtitle={project.description}
          isOpen={activeProject}
          onClose={() => this.setState({ activeProject: false })}
        >
          {activeProject && console.info(project)}
					{activeProject && <Project {...project} id={activeProject} />}
        </Modal>
        <Grid {...gridProps} />
        <ProjectAdd />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects,
		projects_sortedKeys: state.projects_sortedKeys
  };
}

export default connect(mapStateToProps, { fetchProjects, addProject })(ProjectsList);
