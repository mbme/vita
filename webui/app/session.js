'use strict';

import Backbone from 'backbone';
import {AtomInfo} from './base/models';

let session = {
    config: {
        socketAddr: "ws://test.dev:8081/ws"
    },
    atomInfoList: new Backbone.Collection([], {
        model: AtomInfo,
        comparator: 'name'
    })
};

window.session = session;

export default session;
