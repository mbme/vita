import {getStore, getStores, publishStoreUpdate} from 'viter/viter';
import _ from 'lodash';
import {id2key} from 'helpers/utils';

export default {
  'app:initialized': function () {
    let [NetStore, NotesInfoStore] = getStores('net', 'notes-info');

    NetStore.addRequest('notes-list-read').then(function (items) {
      NotesInfoStore.resetInfos(items);

      return 'notes-info';
    }).then(publishStoreUpdate);

    return 'net';
  },

  'note:open': function (...ids) {
    let [AppStore, NetStore] = getStores('app', 'net');

    // skip duplicate ids
    let newIds = ids.filter(id => !_.contains(AppStore.selectedIds, id));

    if (!newIds.length) {
      return;
    }

    AppStore.selectedIds.push(...newIds);

    let NotesStore = getStore('notes');

    // load selected notes
    newIds.forEach(function (id) {
      NetStore.addRequest('note-read', id2key(id)).then(function (note) {
        console.log('open note %s', id);

        NotesStore.addNote(note);

        return 'notes';
      }).then(publishStoreUpdate);
    });

    return ['app', 'net'];
  },

  'note:close': function (...ids) {
    let [AppStore, NotesStore] = getStores('app', 'notes');

    let newIds = _.without(AppStore.selectedIds, ...ids);

    if (_.eq(AppStore.selectedIds, newIds)) {
      return;
    }

    console.log('closed notes %s', ids.join(', '));

    AppStore.selectedIds = newIds;

    ids.forEach(id => NotesStore.removeNote(id));

    return ['app', 'notes'];
  },

  'search:filter-changed': function (filter) {
    let AppStore = getStore('app');

    if (AppStore.searchFilter !== filter) {
      AppStore.searchFilter = filter;

      console.debug('search filter -> %s', filter);

      return 'app';
    }
  }
}
