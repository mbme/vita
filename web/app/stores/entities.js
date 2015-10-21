import {pick, defaults, forEach} from 'lodash';
import {Record, Set} from 'immutable';

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
  attachments: [],
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

export function createNoteRecord(...data) {
  let obj = defaults(...data);
  obj.categories = createCategories(obj.categories);
  return new NoteRecord(obj);
}

export function createNoteInfoRecord(...data) {
  let obj = defaults(...data);
  obj.categories = createCategories(obj.categories);
  return new NoteInfoRecord(obj);
}

export function createCategories(categories = []) {
  return Set(categories);
}

export function mergeRecord(record, data) {
  return record.withMutations(function (record) {
    forEach(data, (value, key) => record.set(key, value));
  });
}
