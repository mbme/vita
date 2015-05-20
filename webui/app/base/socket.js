'use strict';

let requestId = 0;

export default class Socket {
    constructor (address) {
        this.address = address;
        this._requests = {};
    }

    connect () {
        this.socket = new WebSocket(this.address);
        this.socket.onmessage = (evt) => {
            let msg = JSON.parse(evt.data);
            let deferred = this._requests[msg.id];
            if (!deferred) {
                console.error('socket: unexpected message from server: %o', msg);
                return;
            }

            if (msg.error) {
                deferred.reject(msg.error);
            } else {
                deferred.resolve(msg.result);
            }

            delete this._requests[msg.id];
        };
        return new Promise(resolve =>
                           this.socket.onopen = resolve);
    }

    send (method, params) {
        let id = requestId += 1;
        this.socket.send(JSON.stringify({
            id: id,
            method: method,
            params: params
        }));
        return new Promise((resolve, reject) => {
            this._requests[id] = {
                resolve: resolve,
                reject: reject
            };
        });
    }

    getAtomInfoList () {
        return this.send("atoms-list-read");
    }

    getAtom (id) {
        return this.send("atom-read", id);
    }

    createAtom (data) {
        return this.send("atom-create", data);
    }
}
