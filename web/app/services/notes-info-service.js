/* eslint new-cap:[2, {"capIsNewExceptions": ["List"]}] */
/* eslint no-param-reassign: [2, {"props": false}] */

import { List } from 'immutable';
import { key2id, byId } from 'helpers/utils';
import { createNoteInfoRecord, mergeNoteInfoRecord } from 'services/entities';
import { searchResultsComparator } from 'config';

export default function (STORE) {

  return {
    resetInfos (newInfos) {
      let items = newInfos.map(info => createNoteInfoRecord({ id: key2id(info.key) }, info));
      items.sort(searchResultsComparator);

      STORE.infos = List(items);
    },

    getInfo (id) {
      return STORE.infos.find(byId(id));
    },

    markSelected (id, selected) {
      let pos = STORE.infos.findIndex(byId(id));

      if (pos === -1) {
        throw new Error(`cannot find note info with id=${id}`);
      }

      STORE.infos = STORE.infos.update(pos, info => mergeNoteInfoRecord(info, { selected }));
    },
  };
}
