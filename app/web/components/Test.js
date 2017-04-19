import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';
import Tags from '../common/Tags';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      login: '',
      password: '',
      tags: [
        { label: 'kek', id: 1234 },
        { label: 'lkek', id: 1235 },
        { label: 'ksdfek', id: 1236 },
      ]
    };
  }
  componentWillMount() {
    console.log(this);
  }
  onTagClick(sev, ev, tag) {
    console.log(sev, ev, tag);
  }
  onInputChange(ev) {
    const statePart = {};
    statePart[ev.target.name] = ev.target.value;
    this.setState(statePart);
    // <Link to="kek">sdjhdfkhjdfkjh</Link>
  }
  render() {
    return (
      <form onSubmit={e => this.login(e)}>
          <Card
            cover="http://placecage.com/200/100"
            title="Новость"
            linkTo="kek"
          >
            <Tags tags={this.state.tags} />
          </Card>
      </form>
    );
  }
}
