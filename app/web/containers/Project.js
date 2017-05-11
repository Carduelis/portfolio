import React, { Component } from 'react';
import { connect } from 'react-redux';
import MdAdd from 'react-icons/lib/md/add';
import { fetchProject } from '../../actions/firebase';
import Heading from '../components/Heading';
import Iphone from '../components/Iphone';
import ProjectEdit from '../containers/ProjectEdit';

class Project extends Component {
	componentWillMount() {
		console.info('kek');
		this.props.fetchProject(this.props.id);
	}
	renderImageList() {
		if (this.props.projects) {
			const id = this.props.id;
			const theProject = this.props.projects[id];
			if (typeof theProject.images !== 'undefined') {
				const pathToProject = `assets/project_images/${theProject.path}/`;
				return theProject.images.map(src => (
					<div key={src}>
					<img alt={src} src={pathToProject + src} />
					</div>
				));
			}
			return false;
		}
		return false;
	}
	render() {
		console.log(this.props);
		const id = this.props.id;
		const theProject = this.props.projects[id] || {};
		return (
			<div className="narration">
				<ProjectEdit />
				<div className="item-group">
					<div className="item-media">
						<Iphone>
							<img alt={this.props.title} src={`assets/project_images/${this.props.image}`} />
						</Iphone>
					</div>
					<div className="item-content">
						<div className="content">
							<h1>{this.props.title}</h1>
							<p>{theProject.narrative}</p>
						</div>
					</div>
				</div>
				<Heading title="Project's Images">
					<p>Bunch of the mobile website pages</p>
				</Heading>
				<div className="image-list">
					{this.renderImageList()}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		projects: state.projects,
		projectKey: state.project.id
	};
}

export default connect(mapStateToProps, { fetchProject })(Project);
