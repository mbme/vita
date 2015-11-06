import {List} from 'immutable';
import {key2id, byId} from 'helpers/utils';
import {createNoteInfoRecord, mergeNoteInfoRecord} from './entities';
import {searchResultsComparator} from 'config';

export default function createNotesInfoStore () {
  let infos = List();
  return {
    get infos () {
      return infos;
    },

    resetInfos (newInfos) {
      let items = newInfos.map(info => createNoteInfoRecord({id: key2id(info.key)}, info));
      items.sort(searchResultsComparator);

      infos = List(items);
    },

    getInfo (id) {
      return infos.find(byId(id));
    },

    markSelected (id, selected) {
      let pos = infos.findIndex(byId(id))

      if (pos === -1) {
        return false;
      }

      infos = infos.update(pos, info => mergeNoteInfoRecord(info, {selected}));

      return true;
    }
  };
}
