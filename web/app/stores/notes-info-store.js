import {key2id} from 'helpers/utils';

const NotesInfoStore = {
  infos: [],

  resetInfos (infos) {
    this.infos = infos;
    infos.forEach(info => info.id = key2id(info.key));
  }
};

export default NotesInfoStore;
