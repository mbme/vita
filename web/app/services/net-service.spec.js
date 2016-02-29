/* eslint new-cap:[2, {"capIsNewExceptions": ["List"]}] */
import { List } from 'immutable';
import createNetService from 'services/net-service';

describe('NetService', function () {
  it('should create requests', function () {
    let requests = List();
    let store = { requests };
    let service = createNetService(store);

    service.getNotesList();
    expect(requests).to.not.equal(store.requests);
    expect(store.requests).to.have.length(1);
    requests = store.requests;

    service.getNote('key');
    expect(requests).to.not.equal(store.requests);
    expect(store.requests).to.have.length(2);
    requests = store.requests;

    service.deleteNote('key');
    expect(requests).to.not.equal(store.requests);
    expect(store.requests).to.have.length(3);
    requests = store.requests;

    service.updateNote('key');
    expect(requests).to.not.equal(store.requests);
    expect(store.requests).to.have.length(4);
    requests = store.requests;

    service.createNote('key');
    expect(requests).to.not.equal(store.requests);
    expect(store.requests).to.have.length(5);
  });

  it('should remove requests on response', function () {
    let store = { requests: List() };
    let service = createNetService(store);

    let promise = service.getNotesList();
    expect(store.requests).to.have.length(1);

    let { id } = store.requests.get(0);
    let result = 123;
    let response = { id, result };

    let responseHandler;
    service.setSocket({
      addEventListener (evt, handler) {
        responseHandler = handler;
      },
    });

    responseHandler({ data: JSON.stringify(response) });

    expect(store.requests).to.have.length(0);

    return expect(promise).to.eventually.equal(result);
  });

  it('should remove requests on error response', function () {
    let store = { requests: List() };
    let service = createNetService(store);

    let promise = service.getNotesList();
    expect(store.requests).to.have.length(1);

    let { id } = store.requests.get(0);
    let error = 'some error';
    let response = { id, error };

    let responseHandler;
    service.setSocket({
      addEventListener (evt, handler) {
        responseHandler = handler;
      },
    });

    responseHandler({ data: JSON.stringify(response) });

    expect(store.requests).to.have.length(0);

    return expect(promise).to.eventually.be.rejectedWith(error);
  });

});
