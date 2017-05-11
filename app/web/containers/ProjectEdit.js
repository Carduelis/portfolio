import React, { Component } from 'react';
import { connect } from 'react-redux';
import MdAdd from 'react-icons/lib/md/add';
import { editProject } from '../../actions/firebase';
import authFork from '../hoc/AuthFork';
import Modal from '../common/Modal';
import Input from '../common/Input';
import Button from '../common/Button';

class ProjectAdd extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      loading: false,
      isModalOpen: false,
      form: {
        title: '',
        description: '',
        date: '',
        imageRef: '',
        tags: '',
        url: '',
        narrative: '',
      }
    };
  }
  onInputChange(ev) {
    console.log(ev.target.value);
    const statePart = {};
    statePart[ev.target.name] = ev.target.value;
    this.setState({
      form: Object.assign({}, this.state.form, statePart)
    });
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
  edit(e) {
    e.preventDefault();
    this.props.editProject(this.props.project.id, this.state.form);
  }
  kek() {
  /* eslint-disable */
    for (let projectName in projectData) {
      const imgList = projectData[projectName];
      const summary = {
        title: projectName,
        description: 'Developing mobile version of ' + projectName,
        date: 2015,
        image: projectName + '/' + imgList[0],
        tags: 'Design, Front-end, Mobile'
      };
      const full = {
        images: imgList,
        path: projectName,
        narrative: 'Narration of the project has not been presented yet. Coming soon...'
      };
      this.props.addProject({ summary, full });
    };
    /* eslint-enable */
  }
  render() {
    const isFetching = this.state.loading;
    const { form } = this.state;
    const { project, projects } = this.props;
    const currentProjectId = project.id;
    const initialForm = { ...project, ...projects[currentProjectId] };
    return (
      <div>
        <div className="row">
          <div className="col-sm-8">
            <form onSubmit={e => this.edit(e)} className={isFetching && 'loading'}>
              <Input
                autoFocus
                label="URL"
                onChange={this.onInputChange}
                name="url"
                type="url"
                value={form.url || initialForm.url}
              />
              <Input
                label="Narration"
                onChange={this.onInputChange}
                name="narrative"
                type="textarea"
                value={form.narrative || initialForm.narrative}
              />
              <Input
                label="Authority"
                onChange={this.onInputChange}
                name="authority"
                pattern="^[1-5]{1}$"
                type="number"
                value={form.authority || initialForm.authority}
              />
              <Input
                label="Tags"
                onChange={this.onInputChange}
                name="tags"
                type="text"
                value={form.tags || initialForm.tags}
              />
              <Input
                label="Image Ref"
                onChange={this.onInputChange}
                name="imageRef"
                type="text"
                value={form.imageRef || initialForm.imageRef}
              />
              <div className="input-row">
                <Button submit fill size="lg" label="Save the project" loading={isFetching} />
              </div>
            </form>
          </div>
          <div className="col-sm-4">
            <form onSubmit={e => this.edit(e)} className={isFetching && 'loading'}>
              <Input
                autoFocus
                label="Title"
                onChange={this.onInputChange}
                name="title"
                type="text"
                value={form.title || initialForm.title}
              />
              <Input
                label="Description"
                onChange={this.onInputChange}
                name="description"
                type="textarea"
                value={form.description || initialForm.description}
              />
              <div className="input-row">
                <Button submit fill size="lg" label="Save shortcut" loading={isFetching} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    projects: state.projects,
    project: state.project
  };
};

export default authFork(connect(mapStateToProps, { editProject })(ProjectAdd));
