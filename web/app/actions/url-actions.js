import page from 'page';

import {getQueryParam, parseIdsStr} from 'helpers/utils';
import {bus, getStore, publishStoreUpdate} from 'viter/viter';

export default {
  'app:initialized': function () {
    let ids = parseIdsStr(getQueryParam(window.location.search.substring(1), 'ids'));

    page('/', function () {
      bus.publish('url:changed', 'main');
    });
    page.start();

    // init selected items from url
    bus.publish('note:open', ...ids);
  },

  'url:changed': function (page) {
    let AppStore = getStore('app');

    if (AppStore.page === page) {
      return;
    }

    AppStore.setPage(page);

    publishStoreUpdate('app');
  }
}
