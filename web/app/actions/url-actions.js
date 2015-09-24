import page from 'page';

import {getQueryParam, parseIdsStr} from 'helpers/utils';
import {bus, getStore} from 'viter/viter';

export default {
  'app:initialized': function () {
    // init selected items from url
    bus.publish('item:selected', ...parseIdsStr(getQueryParam(window.location.search.substring(1), 'ids')));

    page('/', function () {
      bus.publish('url:changed', 'main');
    });
    page.start();

  },

  'url:changed': function (page) {
    let AppStore = getStore('app');

    if (AppStore.page === page) {
      return;
    }

    AppStore.page = page;

    return 'app';
  }
}
