'use strict';

let requestId = 0;

export default class Socket {
    constructor(address) {
        this.address = address;
        this._requests = {};
    }
    connect() {
        this.socket = new WebSocket(this.address);
        this.socket.onmessage = (evt) => {
            let msg = JSON.parse(evt.data);
            let resolve = this._requests[msg.id];
            if (resolve) {
                resolve(msg.error || msg.result);
                delete this._requests[msg.id];
            } else {
                console.error('socket: unexpected message from server: %o', msg);
            }
        };
        return new Promise(resolve =>
                           this.socket.onopen = resolve);
    }

    send(method, ...params) {
        let id = requestId += 1;
        this.socket.send(JSON.stringify({
            id: id,
            method: method,
            params: params
        }));
        return new Promise((resolve) => {
            this._requests[id] = resolve;
        });
    }

    getAtomInfoList() {
        return this.send("atoms-list-read");
    }
}
