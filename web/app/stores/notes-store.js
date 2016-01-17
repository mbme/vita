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

  function nextNid() {
    return _id += 1;
  }

  function getOrCreateNid (id) {
    if (!idsMap.hasOwnProperty(id)) {
      registerIdMapping(id, nextNid());
    }

    return idsMap[id];
  }

  let notes = List();

  function getExistingNotePos(nId) {
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

    addNote (data) {
      let id = key2id(data.key);
      let nId = getOrCreateNid(id);

      let note = createNoteRecord({id, nId}, data);

      notes = notes.push(note);

      return note;
    },

    removeNote (nId) {
      let pos = getExistingNotePos(nId);

      notes = notes.delete(pos);
    },

    getExistingNote (nId) {
      let pos = getExistingNotePos(nId);

      return notes.get(pos);
    },

    getNoteById (id) {
      return notes.find(byId(id));
    },

    updateNote (nId, data) {
      let pos = getExistingNotePos(nId);

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
        nId: nextNid(),
        key: {type},
        edit: true
      }));
    },

    addAttachment (nId, attachment) {
      let pos = getExistingNotePos(nId);
      let note = notes.get(pos);

      let attachments = note.attachments.add(createAttachment(note.key, attachment));

      let newNote = note.set('attachments', attachments);

      notes = notes.set(pos, newNote);
    },

    removeAttachment (nId, attachmentName) {
      let pos = getExistingNotePos(nId);
      let note = notes.get(pos);

      let attachments = note.attachments.filterNot(
        attachment => attachment.name === attachmentName
      );

      let newNote = note.set('attachments', attachments);

      notes = notes.set(pos, newNote);
    }
  };
}
