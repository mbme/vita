import _ from 'lodash';
import {key2id} from 'helpers/utils';

export default function createNotesInfoStore () {
  return {
    infos: [],

    resetInfos (infos) {
      this.infos = infos;
      infos.forEach(info => info.id = key2id(info.key));
    },

    getInfo (id) {
      return _.find(this.infos, {id});
    },

    markSelected (id, selected) {
      let info = this.getInfo(id);

      if (!info) {
        return;
      }

      let newInfo = Object.assign({}, info, {selected});

      let pos = this.infos.indexOf(info);
      this.infos.splice(pos, 1, newInfo);
    }
  };
}
