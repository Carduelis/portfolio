import React, { Component } from 'react';
import MdMenu from 'react-icons/lib/md/menu';
import MdClose from 'react-icons/lib/md/close';
import { MorphReplace } from 'react-svg-morph';

export default class MorphHamburger extends Component {
  render() {
    let icon;
    if (this.props.menu) {
      icon = (<svg width="24" height="24" fill="#666666" viewBox="0 0 24 24">
                <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
            </svg>);
    } else {
      icon = (<svg width="24" fill="#00ea00" height="24" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>);
    }
    return (
      <MorphReplace width={24} height={24}>
        {icon}
      </MorphReplace>
    );
  }
}
