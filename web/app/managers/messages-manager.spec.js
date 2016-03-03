import createMessagesManager from 'managers/messages-manager';

describe('Messages manager', function () {
  it('should send requests', function () {
    let sender = createMessagesManager();

    let socket = {
      send: sinon.spy(),
    };

    let request = { id: 123 };

    sender({ socket, requests: [request] });

    expect(socket.send.calledOnce).to.be.true;
  });

  it('should send requests only once', function () {
    let sender = createMessagesManager();

    let socket = {
      send: sinon.spy(),
    };

    let request = { id: 123 };

    sender({ socket, requests: [request] });

    let request1 = { id: 4 };
    sender({ socket, requests: [request, request1] });

    expect(socket.send.calledTwice).to.be.true;
  });
});
