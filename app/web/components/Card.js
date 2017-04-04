import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class Card extends Component {
  render() {
    const transition = {
      transitionName: 'fade',
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 300,
      transitionAppear: true,
      transitionAppearTimeout: 300
    };
    const { cover, title, description, children } = this.props;
    const cardContent = [];
    if (cover) {
      cardContent.push(
        <div className="card-cover">
          <img key="1" className="card-cover-img" src={cover} alt="{title}" title={title} />
        </div>
      );
    }
    if (title) {
      cardContent.push(<h3 key="2" className="card-title">{title}</h3>);
    }
    if (description) {
      cardContent.push(<p key="3" className="card-description">{description}</p>);
    }
      cardContent.push(children);
    return (
        <div className="card">
          <ReactCSSTransitionGroup {...transition}>
            {cardContent}
          </ReactCSSTransitionGroup>
        </div>
    );
  }
}
