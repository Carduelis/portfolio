import React, { Component } from 'react';
import ClassName from '../helpers/ClassName';

// const Heading =  ({ title, children, icon }) => (
//   <header className="centered">
//     <h2>
//       {icon && <span className="icon-lg">{icon}</span>}
//       {icon && <br />}
//       {title}
//     </h2>
//     {children}
//   </header>
// );

class Heading extends Component {
  render() {
    const className = new ClassName('title');
    const { title, label, children, icon, small, large } = this.props;
    const align = this.props.align || 'center';
    if (small) className.push('sm');
    if (large) className.push('lg');
    className.push(align);
    return (
      <header className={'centered ' + className.getClass()}>
        <h2>
          {icon && <span className="icon-lg">{icon}</span>}
          {icon && <br />}
          {title || label}
        </h2>
        {children}
      </header>
    );
  }
}

export default Heading;
