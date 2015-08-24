import './styles/main.scss';

import {registerStore, bus} from 'viter/viter';
import AppStore from 'stores/app-store';

import React from 'react';
import Test from './main';

import './actions';

registerStore('app', AppStore);

React.render(<Test />, document.getElementById('content'));

setTimeout(() => bus.publish('initialized'), 2000);
