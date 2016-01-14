import {curry} from 'lodash';
import {key2id, byId} from 'helpers/utils';
import {List} from 'immutable';

import {
  createNoteRecord,
  mergeNoteRecord,
  createAttachment
} from './entities';

const byNid = curry(function (nId, x) {
  return x.nId === nId;
});

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

  function getExistingNotePosByNid(nId) {
    let pos = notes.findIndex(byNid(nId));
    if (pos === -1) {
      let errMsg = `cannot find note with nId=${nId}`;
      console.error(errMsg);
      throw new Error(errMsg);
    }

    return pos;
  }

  return {
    get notes () {
      return notes;
    },

    addNote (note) {
      let id = key2id(note.key);
      let nId = getPrivateId(id);
      notes = notes.push(createNoteRecord({id, nId}, note));
    },

    removeNoteByNid (nId) {
      let pos = getExistingNotePosByNid(nId);

      notes = notes.delete(pos);
    },

    getNoteByNid (nId) {
      return notes.find(byNid(nId));
    },

    getExistingNoteByNid (nId) {
      let pos = getExistingNotePosByNid(nId);

      return notes.get(pos);
    },

    hasNote (id) {
      return !!notes.find(byId(id));
    },

    updateNote (nId, data) {
      let pos = getExistingNotePosByNid(nId);

      let other = {};

      if (data.key) {
        let id = key2id(data.key);
        registerIdMapping(id, nId);
        other.id = id;
      }

      let note = notes.get(pos);
      let newNote = mergeNoteRecord(note, data, other);

      notes = notes.set(pos, newNote);

      return newNote;
    },

    editNote (nId, edit = true) {
      return this.updateNote(nId, {edit})
    },

    newNote (type) {
      notes = notes.push(createNoteRecord({
        nId: _id += 1,
        key: {type},
        edit: true
      }));
    },

    addAttachment (nId, attachment) {
      let pos = getExistingNotePosByNid(nId);
      let note = notes.get(pos);

      let attachments = note.attachments.add(createAttachment(note.key, attachment));

      let newNote = note.set('attachments', attachments);

      notes = notes.set(pos, newNote);
    },

    removeAttachment (nId, attachmentName) {
      let pos = getExistingNotePosByNid(nId);
      let note = notes.get(pos);

      let attachments = note.attachments.filterNot(
        attachment => attachment.name === attachmentName
      );

      let newNote = note.set('attachments', attachments);

      notes = notes.set(pos, newNote);
    }
  };
}
