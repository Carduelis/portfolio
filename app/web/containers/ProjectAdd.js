import React, { Component } from 'react';
import { connect } from 'react-redux';
import MdAdd from 'react-icons/lib/md/add'
import { addProject } from '../../actions/firebase';
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
      isModalOpen: true,
      form: {
        title: '',
        description: '',
        date: '',
        imageRef: '',
        tags: '',
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
  add(e) {
    e.preventDefault();
    this.setState({
      loading: true
    });
    this.props.addProject(this.state.form);
  }
  render() {
    const isFetching = this.state.loading;
    const { form } = this.state;
    return (
      <div>
        <Button label="Add" handleClick={() => this.toggleModal()} />
        <Modal
          title="Adding new project"
          isOpen={this.state.isModalOpen}
          onClose={() => this.toggleModal()}
        >
          <form onSubmit={e => this.add(e)} className={isFetching && 'loading'}>
            <Input
              autoFocus
              label="Title"
              onChange={this.onInputChange}
              name="title"
              type="text"
              value={form.title}
            />
            <Input
              label="Description"
              onChange={this.onInputChange}
              name="description"
              type="textarea"
              value={form.description}
            />
            <Input
              label="Authority"
              onChange={this.onInputChange}
              name="authority"
              pattern="^[1-5]{1}$"
              type="number"
              value={form.authority}
            />
            <Input
              label="Tags"
              onChange={this.onInputChange}
              name="tags"
              type="text"
              value={form.tags}
            />
            <Input
              label="Image Ref"
              onChange={this.onInputChange}
              name="imageRef"
              type="text"
              value={form.imageRef}
            />
            <div className="input-row">
              <Button submit fill label="Add" icon={<MdAdd />} loading={isFetching} />
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}


export default authFork(connect(null, { addProject })(ProjectAdd));
