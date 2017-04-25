import React, { Component } from 'react';
import CommonNavList from '../common/NavList';
import NavListGroup from '../common/NavListGroup';
import NavListItem from '../containers/NavListItem';

export default class NavList extends Component {
  render() {
    const { allItems, idsForShow } = this.props;
    console.log(this, idsForShow, allItems);
    const items = idsForShow.map(id => allItems[id]);
    const childs = items.map(item => {
      switch (item.type) {
        case 'item':
          return (
            <NavListItem item={item} key={item.id} />
          );
        case 'group':
          return (
            <NavListGroup item={item} key={item.id}>
              <NavList idsForShow={item.items} allItems={allItems} />
            </NavListGroup>
          );
        default:
          return (
            <div key={item.id}>error</div>
          );
      }
    });
    return (
      <CommonNavList>
        {childs}
      </CommonNavList>
    );
  }
}


//
// import NavListItem from '../containers/NavListItem';
//
//   const childs = this.props.items.map(item => {
//     if (item.type === 'item') {
//       return (
//         <NavListItem item={item} key={item.id} />
//       );
//       // connect(mapStateToProps)(Link);
//     }
//     return (
//       <div className="nav-item nav-item-group" key={item.id}>
//         <span className="label">{item.title}</span>
//       </div>
//     );
//     // <NavList items={item.items} />
//     // <cNavList itemIds=[4,5,6] />
//     // return NavList items=[{},{},{}]
//   });
//   return (
//     <div>
//       {childs}
//     </div>
//   );
