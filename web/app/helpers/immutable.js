import { clone } from 'lodash';

export function arrPush (arr, item) {
  let res = clone(arr);
  res.push(item);
  return res;
}

export function arrRemoveAt (arr, pos) {
  let res = clone(arr);
  res.splice(pos, 1);
  return res;
}

export function arrFindPos (arr, predicate) {
  let i;
  for (i = 0; i < arr.length; i += 1) {
    if (predicate(arr[i])) {
      return i;
    }
  }

  return -1;
}

export function arrUpdateAt (arr, pos, updater) {
  let newVal = updater(arr[pos]);

  let res = clone(arr);
  res[pos] = newVal;

  return res;
}

export function arrReplaceAt (arr, pos, newVal) {
  let res = clone(arr);
  res[pos] = newVal;

  return res;
}

export function objSet (obj, key, val) {
  let res = clone(obj);
  res[key] = val;

  return res;
}
