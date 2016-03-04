/* eslint no-param-reassign: [2, {"props": false}] */

import { key2id, byId } from 'helpers/utils';
import { createNoteInfoRecord, updateNoteInfoRecord } from 'services/entities';
import { arrUpdateAt } from 'helpers/immutable';

export default function (STORE, searchResultsComparator) {

  return {
    resetInfos (newInfos) {
      STORE.infos = newInfos.map(
        info => createNoteInfoRecord({ id: key2id(info.key) }, info)
      ).sort(
        searchResultsComparator
      );
    },

    getInfo (id) {
      return STORE.infos.find(byId(id));
    },

    markSelected (id, selected) {
      let pos = STORE.infos.findIndex(byId(id));

      if (pos === -1) {
        throw new Error(`cannot find note info with id=${id}`);
      }

      STORE.infos = arrUpdateAt(
        STORE.infos,
        pos,
        info => updateNoteInfoRecord(info, { selected })
      );
    },
  };
}
