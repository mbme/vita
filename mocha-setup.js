global.Enzyme = require('enzyme');

var chai = require('chai');
global.expect = chai.expect;

var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

global.sinon = require('sinon');

// simple stubs
global.window = {
  location: {
    hostname: 'vita.test'
  }
};
