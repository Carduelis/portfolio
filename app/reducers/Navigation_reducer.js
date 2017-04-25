import { FETCH_PROJECTS } from '../constants';

const initialState = {
  activeItem: 1,
  itemsForShow: [1, 2, 3],
  items: {
    1: {
      id: 1,
      type: 'item',
      title: 'Заглавие',
      link: '/url',
    },
    2: {
      id: 2,
      type: 'item',
      title: 'Новости',
      to: '/url'
    },
    3: {
      id: 3,
      type: 'group',
      title: 'Заголовок',
      items: [4]
    },
    4: {
      id: 4,
      type: 'item',
      title: 'Новости',
      to: '/url'
    }
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    // case FETCH_PROJECTS:
    //   // we cant change state via push
    //   // we creates a new copy of state by concat
    //   return state.(action.payload);
      // or via new es6-syntax
      // return [action.payload.data, ...state];
    default:
      return state;
  }
}
