function clone (arr) {
  return arr.slice(0);
}

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
