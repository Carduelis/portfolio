import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import NavListGroup from '../common/NavListGroup';
import NavListItem from '../common/NavListItem';
// import { closeSidebar } from '../../actions/interface';

class NavList extends Component {
  render() {
    const { allItems, idsForShow, location } = this.props;
    const items = idsForShow.map(id => allItems[id]);
    const childs = items.map(item => {
      const isActive = location.pathname === item.to;
      // const isActive = false;
      switch (item.type) {
        case 'item':
          return (
            <NavLink to={item.to} exact={item.exact} key={item.id}>
              <NavListItem item={item} isActive={isActive} handleClick={this.props.handleClick} />
            </NavLink>
          );
        case 'group':
          return (
            <NavListGroup item={item} key={item.id}>
              <NavList {...this.props} idsForShow={item.items} allItems={allItems} />
            </NavListGroup>
          );
        default:
          return (
            <div key={item.id}>error</div>
          );
      }
    });
    return (
      <div className="nav-list">
        {childs}
      </div>
    );
  }
}
export default withRouter(NavList);

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
