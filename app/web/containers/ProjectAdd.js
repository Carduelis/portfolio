import React, { Component } from 'react';
import { connect } from 'react-redux';
import MdAdd from 'react-icons/lib/md/add';
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
      isModalOpen: false,
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
    this.props.addProject({
        summary: this.state.form,
        full: {
          images: [],
          path: '',
          narrative: 'Narration of the project has not been presented yet. Coming soon...'
        }
    });
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
      this.props.addProject({ summary, full })
    };
    /* eslint-enable */
  }
  render() {
    const isFetching = this.state.loading;
    const { form } = this.state;
    return (
      <div>
        <Button label="Add" handleClick={() => this.kek()} />
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
/* eslint-disable */
const projectData = {
  "adamant":["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"],
  "agami.ru": ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"],
  "alpina": ["1.PNG","5.PNG","7.PNG","8.PNG"],
  "autototemm": ["1.PNG","11.PNG","12.PNG","3.PNG","4.PNG","after.PNG"],
  "avall.ru": ["1.jpg","2.jpg","3.jpg","4.jpg"],
  "avtocity": ["3.PNG","4.PNG","5.PNG"],
  "beauty-shop.ru": ["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png"],
  "cian": ["1.PNG","2.PNG","3.PNG","4.PNG","5.PNG","6.PNG"],
  "cphk.ru": ["1.PNG","2.PNG","3.PNG","4.PNG","5.PNG","6.PNG"],
  "divnieokna": ["1.PNG","2.PNG","3.PNG","after.PNG"],
  "eco-lacomka.ru": ["1.png","2.png","3.png","4.png","5.png"],
  "emex": ["1.PNG","2.PNG","3.PNG","4.PNG","5.PNG","6.PNG","7.PNG"],
  "finam": ["1.PNG","10.PNG","11.PNG","12.PNG","2.PNG","3.PNG","4.PNG","5.PNG","6.PNG","7.PNG","8.PNG","9.PNG"],
  "foroffice.ru": ["1.PNG","2.PNG","3.PNG","4.PNG","5.PNG","6.PNG","7.PNG","8.PNG"],
  "goldengirls.ru": ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"],
  "grano": ["1.PNG","2.PNG","after.PNG"],
  "homecredit.ru": ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"],
  "homeme.ru": ["1.jpg","2.jpg","3.jpg","4.jpg","6.jpg","7.jpg","8.jpg","after.jpg"],
  "kabbalah": ["13.PNG","2.PNG","3.PNG","5.PNG","after.PNG"],
  "krasotkapro": ["1.PNG","2.PNG","3.PNG","4.PNG"],
  "lanta.ru": ["1.jpg","2.jpg","3.jpg","4.jpg"],
  "leroy": ["1.PNG","2.PNG","3.PNG","4.PNG","5.PNG","6.PNG","7.PNG"],
  "limecredit.ru": ["1.jpg","2.jpg","3.jpg","4.jpg"],
  "naked-science.ru": ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"],
  "netprint": ["1.PNG","2.PNG","3.PNG","4.PNG","5.PNG"],
  "olant-shop.ru": ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"],
  "parkerclub.ru": ["1.png","2.png","3.png","4.png","5.png","6.png"],
  "peredelkino": ["1.PNG","2.PNG","3.PNG","4.PNG","5.PNG","6.PNG"],
  "pop-music": ["1.PNG","2.PNG","3.PNG","4.PNG"],
  "r4s": ["11.PNG","2.PNG","after.PNG"],
  "sendflowers.ru": ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"],
  "sexrf.com": ["1.png","10.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png"],
  "sezar-group.ru": ["1.png","2.png","3.png","4.png"],
  "shop.fc-zenit.ru": ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"],
  "smart-buy.ru": ["1.png","2.png","3.png","4.png","5.png"],
  "tjonline": ["1.PNG","2.PNG","3.PNG","4.PNG","5.PNG","6.PNG","7.PNG","8.PNG"],
  "tv3": ["1.jpg","2.jpg","3.jpg","after.jpg"],
  "vakhtangov.ru": ["1.PNG","2.PNG","3.PNG","4.PNG","5.PNG","6.PNG"],
  "worldclass": ["1.PNG","11.PNG","13.PNG","15.PNG","2.PNG","9.PNG","after.PNG"],
  "zakon.ru": ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"]
}
/* eslint-enable */
export default authFork(connect(null, { addProject })(ProjectAdd));
