import { curry } from 'lodash';
import { key2id, byId } from 'helpers/utils';

import { STORE } from 'viter/store';

import {
  createNoteRecord,
  mergeNoteRecord,
  createAttachment
} from './entities';

const byNid = curry(function (nId, x) {
  return x.nId === nId;
});

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
  let pos = STORE.notes.findIndex(byNid(nId));
  if (pos === -1) {
    let errMsg = `cannot find note with nId=${nId}`;
    console.error(errMsg);
    throw new Error(errMsg);
  }

  return pos;
}

export default {
  getNotes () {
    return STORE.notes;
  },

  addNote (data) {
    let id = key2id(data.key);
    let nId = getOrCreateNid(id);

    let note = createNoteRecord({ id, nId }, data);

    STORE.notes = STORE.notes.push(note);

    return note;
  },

  removeNote (nId) {
    let pos = getNotePos(nId);

    STORE.notes = STORE.notes.delete(pos);
  },

  getNote (nId) {
    let pos = getNotePos(nId);

    return STORE.notes.get(pos);
  },

  getNoteById (id) {
    return STORE.notes.find(byId(id));
  },

  updateNote (nId, data) {
    let pos = getNotePos(nId);

    let other = {};

    if (data.key) {
      let id = key2id(data.key);
      registerIdMapping(id, nId);
      other.id = id;
    }

    let note = STORE.notes.get(pos);
    let newNote = mergeNoteRecord(note, data, other);

    STORE.notes = STORE.notes.set(pos, newNote);

    return newNote;
  },

  editNote (nId, edit = true) {
    return this.updateNote(nId, { edit });
  },

  newNote (type) {
    STORE.notes = STORE.notes.push(createNoteRecord({
      nId: nextNid(),
      key: { type },
      edit: true
    }));
  },

  addAttachment (nId, attachment) {
    let pos = getNotePos(nId);
    let note = STORE.notes.get(pos);

    let attachments = note.attachments.add(createAttachment(note.key, attachment));

    let newNote = note.set('attachments', attachments);

    STORE.notes = STORE.notes.set(pos, newNote);
  },

  removeAttachment (nId, attachmentName) {
    let pos = getNotePos(nId);
    let note = STORE.notes.get(pos);

    let attachments = note.attachments.filterNot(
      attachment => attachment.name === attachmentName
    );

    let newNote = note.set('attachments', attachments);

    STORE.notes = STORE.notes.set(pos, newNote);
  }
};
