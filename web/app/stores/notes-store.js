import {invert} from 'lodash';
import {key2id, byId} from 'helpers/utils';
import {List} from 'immutable';

import {createNoteRecord, mergeNoteRecord} from './entities';

export default function createNotesStore () {
  let idsMap = {}; // note.id : note.nId
  let _id = 0;

  function registerIdMapping(id, nId) {
    idsMap[id] = nId;
  }

  function getPrivateId (id) {
    if (!idsMap.hasOwnProperty(id)) {
      registerIdMapping(id, _id += 1);
    }

    return idsMap[id];
  }

  let notes = List();

  return {
    get notes () {
      return notes;
    },

    addNote (note) {
      let id = key2id(note.key);
      let nId = getPrivateId(id);
      notes = notes.push(createNoteRecord({id, nId}, note));
    },

    removeNote (id) {
      let pos  = notes.findIndex(byId(id));
      if (pos === -1) {
        return false;
      }

      notes = notes.delete(pos);

      return true;
    },

    removeNoteByNid (nId) {
      let pos = notes.findIndex(note => note.nId === nId);
      if (pos === -1) {
        return false;
      }

      notes = notes.delete(pos);

      return true;
    },

    getNote (id) {
      return notes.find(byId(id));
    },

    getNoteByNid (nId) {
      return notes.find(note => note.nId === nId);
    },

    hasNote (id) {
      return !!this.getNote(id);
    },

    updateNote (id, data) {
      let pos  = notes.findIndex(byId(id));
      if (pos === -1) {
        return false;
      }

      notes = notes.update(pos, note => mergeNoteRecord(note, data));

      return true;
    },

    editNote (id, edit = true) {
      return this.updateNote(id, {edit})
    },

    newNote (type) {
      notes = notes.push(createNoteRecord({
        nId: _id += 1,
        key: {type},
        edit: true
      }));
    },

    replaceNote (nId, note) {
      let pos = notes.findIndex(note => note.nId === nId);
      if (pos === -1) {
        return false;
      }

      let id = key2id(note.key);
      registerIdMapping(id, nId);

      notes = notes.set(pos, createNoteRecord({id, nId}, note));

      return true;
    },

    getIdByNid (nId) {
      return invert(idsMap)[nId];
    }
  };
}
