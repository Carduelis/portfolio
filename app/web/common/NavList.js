import React, { Component } from 'react';
import MdKeyboardArrowRight from 'react-icons/lib/md/keyboard-arrow-right';

export default class NavList extends Component {
  render() {
    const items = [
      {
        id: 1,
        type: 'item',
        title: 'Новости',
        to: '/url'
      }, {
        id: 2,
        type: 'item',
        title: 'Новости',
        to: '/url'
      },
    ];
    const childs = items.map(item => {
      return (
        <div className="nav-item" key={item.id}>
          {item.title} <MdKeyboardArrowRight />
        </div>
      );
    });
    return (
      <div>
        {childs}
      </div>
    );
  }
}
