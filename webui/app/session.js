'use strict';

import Backbone from 'backbone';
import {AtomInfo, AtomCollection} from 'base/models';

let session = {
    config: {
        socketAddr: "ws://test.dev:8081/ws"
    },

    bus: new Backbone.Model(),

    atomInfoList: new Backbone.Collection([], {
        model: AtomInfo,
        comparator: 'name'
    }),

    atomList: new AtomCollection()
};

window.session = session;

export default session;
