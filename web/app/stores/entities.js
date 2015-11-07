import {pick, defaults, clone} from 'lodash';
import {Record, Set, Map} from 'immutable';
import {stringsComparator} from 'helpers/utils';

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
    return !this.id
  }

  getPublicData () {
    return pick(this, ['key', 'name', 'data', 'categories']);
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

const Attachment = Record({
  name: '',
  mime: undefined,
  type: undefined,
  fileSize: 0,
  timestamp: 0
});

export function createNoteRecord(...data) {
  let obj = defaults({}, ...data);
  obj.categories = createCategories(obj.categories || undefined);
  obj.attachments = createAttachments(obj.attachments || undefined);
  return new NoteRecord(obj);
}

export function createNoteInfoRecord(...data) {
  let obj = defaults({}, ...data);
  obj.categories = createCategories(obj.categories || undefined);
  return new NoteInfoRecord(obj);
}

export function createCategories(categories = []) {
  if (Set.isSet(categories)) {
    return categories;
  }

  let arr = clone(categories);
  arr.sort(stringsComparator);
  return Set(categories);
}

export function createAttachment(attachment) {
  if (Map.isMap(attachment)) {
    return attachment;
  }

  let {name, mime, type, size, timestamp} = attachment;
  return new Attachment({
    name, mime, type, timestamp,
    fileSize: size
  });
}

export function createAttachments(attachments = []) {
  if (Set.isSet(attachments)) {
    return attachments;
  }

  return Set(attachments.map(createAttachment));
}

export function mergeNoteRecord(record, data) {
  return createNoteRecord(data, record.toObject());
}

export function mergeNoteInfoRecord(record, data) {
  return createNoteInfoRecord(data, record.toObject());
}
