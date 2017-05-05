import React, { Component } from 'react';
import { connect } from 'react-redux';
import MdAdd from 'react-icons/lib/md/add';
import { fetchProject } from '../../actions/firebase';

class Project extends Component {
	componentWillMount() {
		this.props.fetchProject(this.props.id);
	}
	renderImageList() {
		if (this.props.projects) {
			const id = this.props.id;
			const theProject = this.props.projects[id];
			if (typeof theProject.images !== 'undefined') {
				const pathToProject = `assets/project_images/${theProject.path}/`;
				theProject.images.map(src => (
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
			<div>
				<h1>{this.props.title}</h1>
				<p>{this.props.description}</p>
				<div className="avatar">
					<img alt={this.props.title} src={`assets/project_images/${this.props.image}`} />
				</div>
				<p>{theProject.narrative}</p>
				{this.renderImageList()}
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
