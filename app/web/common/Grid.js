import React, { Component } from 'react';
import ClassName from '../helpers/ClassName';


class Grid extends Component {
  renderItems() {
    const { mapData, mapFunction } = this.props;
    const mapWrapper = (item, i, array) => {
      const className = new ClassName('grid-item');
      if (item.size) {
        className.push(item.size);
      }
      return (
        <div className={className.getClass()} key={item.id || i}>{mapFunction(item, i, array)}</div>
      );
  };
    return Object.keys(mapData).map(key => {
      const item = mapData[key];
      return mapWrapper(item, key, mapData);
    });
  }
  render() {
    const className = new ClassName('grid');
    const classNames = this.props.classNames || [];
    classNames.map(kek => className.push(kek));
    return (
      <div className={className.getClass()}>
        {this.renderItems()}
        {this.props.children}
      </div>
    );
  }
}

export default Grid;
