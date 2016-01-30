/* eslint new-cap:[2, {"capIsNewExceptions": ["Set", "Record"]}] */
import { defaults, clone, partial } from 'lodash';
import { Record, Set, Map } from 'immutable';
import { stringsComparator } from 'helpers/utils';
import { baseUrl } from 'config';

export function createCategories (categories = []) {
  if (Set.isSet(categories)) {
    return categories;
  }

  let arr = clone(categories);
  arr.sort(stringsComparator);
  return Set(categories);
}

const Attachment = Record({
  name: '',
  mime: undefined,
  type: undefined,
  fileSize: 0,
  timestamp: 0,
  url: ''
});

export function createAttachment (noteKey, attachment) {
  if (Map.isMap(attachment)) {
    return attachment;
  }

  let { name, mime, type, size, timestamp } = attachment;
  return new Attachment({
    name, mime, type, timestamp,
    fileSize: size,
    url: `${baseUrl}/notes/${noteKey.type}/${noteKey.id}/attachments/${name}`
  });
}

export function createAttachments (noteKey, attachments = []) {
  if (Set.isSet(attachments)) {
    return attachments;
  }

  return Set(attachments.map(partial(createAttachment, noteKey)));
}


class NoteRecord extends Record({
  nId: undefined,
  id: undefined,
  key: {
    type: undefined,
    id: undefined
  },
  edit: false,
  name: '',
  data: '',
  categories: createCategories(),
  attachments: createAttachments(),
  timestamp: 0
}) {
  isNew () {
    return !this.id;
  }
}

const NoteInfoRecord = Record({
  id: undefined,
  key: {
    type: undefined,
    id: undefined
  },
  name: undefined,
  categories: createCategories(),
  selected: false,
  timestamp: 0
});

export function createNoteRecord (...data) {
  let obj = defaults({}, ...data);
  obj.categories = createCategories(obj.categories || undefined);
  obj.attachments = createAttachments(obj.key, obj.attachments || undefined);
  return new NoteRecord(obj);
}

export function createNoteInfoRecord (...data) {
  let obj = defaults({}, ...data);
  obj.categories = createCategories(obj.categories || undefined);
  return new NoteInfoRecord(obj);
}

export function mergeNoteRecord (record, ...data) {
  return createNoteRecord(...(data.reverse()), record.toObject());
}

export function mergeNoteInfoRecord (record, ...data) {
  return createNoteInfoRecord(...(data.reverse()), record.toObject());
}
