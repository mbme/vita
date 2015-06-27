'use strict';

import Socket from 'base/socket';

let session = {
    config: {
        socketAddr: "ws://test.dev:8081/ws",
        serverAddr: "http://test.dev:8081"
    },

    getServerAddress (addr) {
        return this.config.serverAddr + addr;
    },
};

session.socket = new Socket(session.config.socketAddr);

export default session;
