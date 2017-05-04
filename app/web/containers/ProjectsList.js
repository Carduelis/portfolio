import React, { Component } from 'react';
import { connect } from 'react-redux';
import MdLocalOffer from 'react-icons/lib/md/local-offer';

import Button from '../common/Button';
import Modal from '../common/Modal';
import Card from '../common/Card';
import ProjectAdd from '../containers/ProjectAdd';
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
    const mapFunction = (project, id) => {
      let tags = false;
      if (typeof project.tags === 'string') {
        tags = project.tags.split(', ').map((label, key) => ({ key, label }));
      }
      const to = `/projects/${id}`;
      const cover = project.cover || 'assets/project_images/'+project.image;
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
    function getSortedArray(obj, key) {
      const charCode = smth => smth.toString().toLowerCase().charCodeAt();
      const sortedKeys = Object.keys(obj).sort((a,b) => {
        return charCode(obj[a][key]) - charCode(obj[b][key]);
      });
      return sortedKeys.map(item => {
        return obj[item];
      });
    }
    const mapArray = getSortedArray(mapData, 'title');
    const gridProps = {
      classNames: ['kek'],
      mapFunction,
      mapArray,
    };
    const project = projects[activeProject] || {};
    return (
      <div>
        <Modal
          title={project.title}
          subtitle={project.description}
          isOpen={activeProject}
          onClose={() => this.setState({ activeProject: false })}
        >
          {activeProject && <Card
            title={project.title}
            cover={project.cover}
            description={project.description}
          />}
        </Modal>
        <Grid {...gridProps} />
        <ProjectAdd />
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
