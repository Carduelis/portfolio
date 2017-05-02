import React, { Component } from 'react';
import MdClose from 'react-icons/lib/md/close';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Ink from 'react-ink';
import Button from '../common/Button';


export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }
  close(e) {
    e.preventDefault();
    if (this.props.onClose) {
      this.props.onClose();
    }
  }
  render() {
    const body = document.getElementsByTagName('body')[0];
    if (!this.props.isOpen) {
      body.classList.remove('modal-opened');
      return null;
    }
    body.classList.add('modal-opened');

    const transitionFade = {
      transitionName: 'fade',
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 300,
      transitionAppear: true,
      transitionAppearTimeout: 500
    };

    const transitionBump = {
      transitionName: 'bump',
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 300,
      transitionAppear: true,
      transitionAppearTimeout: 500
    };
    const { title, subtitle, children } = this.props;
    return (
        <div className="modal">
            <ReactCSSTransitionGroup {...transitionBump}>
              <div className="modal-window">
                <header className="modal-header">
                  <span className="modal-title">
                    {title}
                  {subtitle && <span className="modal-subtitle">{subtitle}</span>}
                  </span>

                  <span className="modal-close">
                    <Button icon={<MdClose />} handleClick={this.close} />
                  </span>
                </header>
                <section className="modal-body">
                  {children || 'Content is not presented'}
                </section>
                <footer className="modal-footer">
                  kek
                </footer>
              </div>
            </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup {...transitionFade}>
            <div className="modal-backdrop" onClick={this.close} />
          </ReactCSSTransitionGroup>
        </div>
    );
  }
}
