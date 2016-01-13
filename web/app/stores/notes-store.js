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

    removeNote (id) {
      let pos  = notes.findIndex(byId(id));
      if (pos === -1) {
        return false;
      }

      notes = notes.delete(pos);

      return true;
    },

    removeNoteByNid (nId) {
      let pos = getExistingNotePosByNid(nId);

      notes = notes.delete(pos);

      return true;
    },

    getNote (id) {
      return notes.find(byId(id));
    },

    getNoteByNid (nId) {
      return notes.find(byNid(nId));
    },

    getExistingNoteByNid (nId) {
      let pos = getExistingNotePosByNid(nId);

      return notes.get(pos);
    },

    hasNote (id) {
      return !!this.getNote(id);
    },

    updateNote (id, data) {
      let pos  = notes.findIndex(byId(id));
      if (pos === -1) {
        throw new Error();
      }

      notes = notes.update(pos, note => mergeNoteRecord(note, data));
    },

    editNote (id, edit = true) {
      this.updateNote(id, {edit})
    },

    newNote (type) {
      notes = notes.push(createNoteRecord({
        nId: _id += 1,
        key: {type},
        edit: true
      }));
    },

    replaceNote (nId, note) {
      let pos = getExistingNotePosByNid(nId);

      let id = key2id(note.key);
      registerIdMapping(id, nId);

      let newNote = createNoteRecord({id, nId}, note);
      notes = notes.set(pos, newNote);

      return newNote;
    },

    addAttachment (nId, attachment) {
      let pos = getExistingNotePosByNid(nId);
      let note = notes.get(pos);

      let attachments = note.attachments.add(createAttachment(attachment));

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
