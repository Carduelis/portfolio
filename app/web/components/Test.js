import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MdAdd from 'react-icons/lib/md/add';
import Card from '../common/Card';
import AuthFork from '../hoc/AuthFork';
import Tag from '../common/Tag';
import Tags from '../common/Tags';
import Button from '../common/Button';

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
    const CardWhenAuthorized = AuthFork(Card);
    return (
      <form onSubmit={e => this.login(e)}>
        <CardWhenAuthorized
          cover="http://placecage.com/200/100"
          title="Новость"
          linkTo="kek"
        >
          <Tags tags={this.state.tags} />
        </CardWhenAuthorized>
          <Tag label="Тэг" handleClick={this.onTagClick} />
          <Tags tags={this.state.tags} handleClick={this.onTagClick} />
          <Button
            fill
            type="success"
            size="lg"
            label="Kesdfsk"
            handleClick={(e) => console.log(e.currentTarget.type)}
          />
          <Button fill type="success" size="sm" label="Успех" />
          <Button fill type="warning" size="sm" label="Предупреждение" />
          <Button fill type="primary" size="sm" label="Primary" />
          <Button fill type="danger" size="sm" label="Danger!" />
          <Button type="success" size="lg" label="Успех" />
          <Button type="warning" size="lg" label="Предупреждение" />
          <Button type="primary" size="lg" label="Primary" />
          <Button type="danger" size="lg" label="Danger!" />
          <Button bordered type="success" size="lg" label="Успех" />
          <Button bordered type="warning" size="lg" label="Предупреждение" />
          <Button bordered type="primary" size="lg" label="Primary" />
          <Button bordered type="danger" size="lg" label="Danger!" />
      </form>
    );
  }
}
