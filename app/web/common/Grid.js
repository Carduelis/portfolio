import React, { Component } from 'react';
import ClassName from '../helpers/ClassName';


class Grid extends Component {
  renderItems() {
    const { mapArray, mapFunction } = this.props;
    const mapWrapper = (item, i, array) => {
      const className = new ClassName('grid-item');
      if (item.size) {
        className.push(item.size);
      }
      return (
        <div className={className.getClass()} key={item.id || i}>{mapFunction(item, i, array)}</div>
      );
  };
    return mapArray.map((item, key) => {
      return mapWrapper(item, key, mapArray);
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
