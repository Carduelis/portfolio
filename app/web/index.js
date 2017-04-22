import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from '../store/configureStore';

import { checkUserAuthenication } from '../actions/firebase';


// load our css
// require('./styles/style.less');
import './styles/style.less';

const store = configureStore();
const rootElement = document.getElementById('root');

store.dispatch(checkUserAuthenication());

render(<Root store={store} />, rootElement);
