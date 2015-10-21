import {List, Record} from 'immutable';
import {key2id, byId} from 'helpers/utils';
import {createNoteInfoRecord, mergeRecord} from './entities';

export default function createNotesInfoStore () {
  let infos = List();
  return {
    get infos () {
      return infos;
    },

    resetInfos (newInfos) {
      infos = List(newInfos.map(info => createNoteInfoRecord({id: key2id(info.key)}, info)));
    },

    getInfo (id) {
      return infos.find(byId(id));
    },

    markSelected (id, selected) {
      let pos = infos.findIndex(byId(id))

      if (pos === -1) {
        return false;
      }

      infos = infos.update(pos, info => mergeRecord(info, {selected}));

      return true;
    }
  };
}
