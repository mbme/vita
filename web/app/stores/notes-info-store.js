const NotesInfoStore = {
  infos: [],

  resetInfos (infos) {
    this.infos = infos;
    infos.forEach(info => info.id = `${info.key.type}/${info.key.id}`);
  }
};

export default NotesInfoStore;
