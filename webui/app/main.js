import Marionette from 'marionette';

import hahaTpl from './main.hbs';

var App = new Marionette.Application();


var HaHaView = Marionette.ItemView.extend({
  template: hahaTpl
});

App.addRegions({
  'sidePanel': '#side-panel',
  'main': '#main',
  'modals': '#modals'
});

App.on('start', function () {
  'use strict';

  App.getRegion('sidePanel').show(new HaHaView());
});

App.start();
