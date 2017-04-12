import React, { Component } from 'react';
import MdLocalOffer from 'react-icons/lib/md/local-offer';
import Tag from '../components/Tag';

export default class Tags extends Component {
  constructor(props) {
    super(props);
    this.tagsRender = this.tagsRender.bind(this);
  }

  tagsRender(tag) {
    let handleClick = () => {
      console.warn('handleClick is not presented');
    };

    if (this.props.handleClick) {
      handleClick = (syntheticEvent, event) => this.props.handleClick(syntheticEvent, event, tag);
    }
    return (
      <Tag
        icon={false}
        label={tag.label}
        key={tag.id}
        handleClick={handleClick}
      />
    );
  }
  render() {
    return (
      <div className="tags-group">
        <span className="tags-icon">
          <MdLocalOffer />
          <MdLocalOffer color="white" />
          <MdLocalOffer />
        </span>
        {this.props.tags.map(this.tagsRender)}
      </div>
    );
  }
}

Tags.propTypes = {
  tags: React.PropTypes.array.isRequired,
  handleClick: React.PropTypes.function
};
