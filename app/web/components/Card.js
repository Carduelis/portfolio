import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class Card extends Component {
  render() {
    console.log(Link)
    const transition = {
      transitionName: 'fade',
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 300,
      transitionAppear: true,
      transitionAppearTimeout: 300
    };
    const { cover, title, description, children, linkTo } = this.props;
    const cardContent = [];
    if (cover) {
      cardContent.push(
        <div key="1" className="card-cover">
          <img className="card-cover-img" src={cover} alt={title} title={title} />
        </div>
      );
    }
    if (title) {
      const jsx = <h2 key="2" className="card-title">{title}</h2>
      if (linkTo) {
        // cardContent.push(<Link to="kk">{jsx}</Link>);
        cardContent.push(jsx);
      } else {
        cardContent.push(jsx);
      }
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
