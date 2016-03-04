import { baseUrl } from 'config';
import { defaults, uniqBy } from 'lodash';
import { stringsComparator } from 'helpers/utils';

const AttachmentDefaults = {
  name: '',
  mime: undefined,
  type: undefined,
  size: 0,
  timestamp: 0,
  url: '',
};

const NoteInfoDefaults = {
  id: undefined,
  key: {
    type: undefined,
    id: undefined,
  },
  name: undefined,
  categories: [],
  selected: false,
  timestamp: 0,
};

const RecordDefaults = {
  nId: undefined,
  id: undefined,
  key: {
    type: undefined,
    id: undefined,
  },
  edit: false,
  name: '',
  data: '',
  categories: [],
  attachments: [],
  timestamp: 0,
  isNew () {
    return !this.id;
  },
};

export function createCategories (categories) {
  return uniqBy(
    categories, category => category.toLowerCase()
  ).sort(stringsComparator);
}

export function createAttachment (noteKey, data) {
  // data may be already proper Attachment
  // so we should just return it
  if (AttachmentDefaults.isPrototypeOf(data)) {
    return data;
  }

  let obj = defaults({
    url: `${baseUrl}/notes/${noteKey.type}/${noteKey.id}/attachments/${data.name}`,
  }, data);

  Object.setPrototypeOf(obj, AttachmentDefaults);

  return obj;
}

export function createNoteRecord (...data) {
  let obj = defaults({}, ...data);

  Object.setPrototypeOf(obj, RecordDefaults);

  // sometimes we can receive null instead of attachments
  // so we should handle that
  obj.attachments = (obj.attachments || []).map(
    attachment => createAttachment(obj.key, attachment)
  );

  return obj;
}

export function createNoteInfoRecord (...data) {
  let obj = defaults({}, ...data);

  Object.setPrototypeOf(obj, NoteInfoDefaults);

  return obj;
}

export function updateNoteRecord (record, ...data) {
  return createNoteRecord(...(data.reverse()), record);
}

export function updateNoteInfoRecord (record, ...data) {
  return createNoteInfoRecord(...(data.reverse()), record);
}
