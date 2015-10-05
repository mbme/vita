import {key2id} from 'helpers/utils';

export default function createNotesInfoStore () {
  return {
    infos: [],

    resetInfos (infos) {
      this.infos = infos;
      infos.forEach(info => info.id = key2id(info.key));
    }
  };
}
