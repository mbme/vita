import {List, Map} from 'immutable';
import {key2id, byId} from 'helpers/utils';

export default function createNotesInfoStore () {
  let infos = List();
  return {
    get infos () {
      return infos;
    },

    resetInfos (newInfos) {
      infos = List(newInfos.map(info => Map(info).merge({id: key2id(info.key), selected: false})));
    },

    getInfo (id) {
      return infos.find(byId(id));
    },

    markSelected (id, selected) {
      let pos = infos.findIndex(byId(id))

      if (pos === -1) {
        return false;
      }

      infos = infos.update(pos, info => info.merge({selected}));

      return true;
    }
  };
}
