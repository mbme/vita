'use strict';

import Socket from 'base/socket';

let base = `${window.location.hostname}:${window.VITA_PORT || window.location.port}`;

let session = {
    config: {
        socketAddr: `ws://${base}/ws`,
        serverAddr: `${window.location.protocol}//${base}`
    },

    getServerAddress (addr) {
        return this.config.serverAddr + addr;
    },
};

session.socket = new Socket(session.config.socketAddr);

export default session;
