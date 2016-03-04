/* eslint no-param-reassign: [2, {"props": false}] */

import { key2id, byId } from 'helpers/utils';
import {
  arrPush,
  arrRemoveAt,
  arrReplaceAt,
  objSet,
} from 'helpers/immutable';

import {
  createNoteRecord,
  updateNoteRecord,
  createAttachment,
} from './entities';


export default function (STORE) {
  let idsMap = {}; // note.id : note.nId
  let _id = 0;

  function registerIdMapping (id, nId) {
    idsMap[id] = nId;
  }

  function nextNid () {
    _id += 1;
    return _id;
  }

  function getOrCreateNid (id) {
    if (!idsMap.hasOwnProperty(id)) {
      registerIdMapping(id, nextNid());
    }

    return idsMap[id];
  }

  function getNotePos (nId) {
    let pos = STORE.notes.findIndex(note => note.nId === nId);
    if (pos === -1) {
      let errMsg = `cannot find note with nId=${nId}`;
      console.error(errMsg);
      throw new Error(errMsg);
    }

    return pos;
  }

  return {
    getNotes () {
      return STORE.notes;
    },

    addNote (data) {
      let id = key2id(data.key);
      let nId = getOrCreateNid(id);

      let note = createNoteRecord({ id, nId }, data);

      STORE.notes = arrPush(STORE.notes, note);
    },

    removeNote (nId) {
      let pos = getNotePos(nId);

      STORE.notes = arrRemoveAt(STORE.notes, pos);
    },

    getNote (nId) {
      let pos = getNotePos(nId);

      return STORE.notes[pos];
    },

    getNoteById (id) {
      return STORE.notes.find(byId(id));
    },

    updateNote (nId, data) {
      let pos = getNotePos(nId);

      let other;

      if (data.key) {
        let id = key2id(data.key);
        registerIdMapping(id, nId);
        other = { id };
      }

      let note = STORE.notes[pos];
      let newNote = updateNoteRecord(note, data, other);

      STORE.notes = arrReplaceAt(STORE.notes, pos, newNote);

      return newNote;
    },

    editNote (nId, edit = true) {
      return this.updateNote(nId, { edit });
    },

    newNote (type) {
      let note = createNoteRecord({
        nId: nextNid(),
        key: { type },
        edit: true,
      });
      STORE.notes = arrPush(STORE.notes, note);
    },

    addAttachment (nId, attachment) {
      let pos = getNotePos(nId);
      let note = STORE.notes[pos];

      let attachments = arrPush(
        note.attachments,
        createAttachment(note.key, attachment)
      );

      let newNote = objSet(note, 'attachments', attachments);

      STORE.notes = arrReplaceAt(STORE.notes, pos, newNote);
    },

    removeAttachment (nId, attachmentName) {
      let pos = getNotePos(nId);
      let note = STORE.notes[pos];

      let attachments = note.attachments.filter(
        attachment => attachment.name !== attachmentName
      );

      let newNote = objSet(note, 'attachments', attachments);

      STORE.notes = arrReplaceAt(STORE.notes, pos, newNote);
    },
  };
}
