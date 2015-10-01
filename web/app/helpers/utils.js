import {unique, words} from 'lodash';

export function getQueryParam(query, param) {
  let pairs = (query || '').split("&");

  for (let pair of pairs) {
    let [key, val] = pair.split('=');

    if (param === key) {
      return val;
    }
  }
  return null;
}

export function match(str, regex) {
  return (str || '').match(regex) || [];
}

export function parseIdsStr(idsStr) {
  let matches = match(idsStr, /^\(([a-z0-9, :\/]*)\)$/);

  return unique(match(matches[1], /(:[a-z]+\/[0-9]+)/g));
}

// https://github.com/bevacqua/fuzzysearch
export function fuzzySearch(needle, haystack) {
  let nlen = needle.length;

  // if needle is empty then it matches everything
  if (!nlen) {
    return true;
  }

  let hlen = haystack.length;
  if (nlen > hlen) {
    return false;
  }
  if (nlen === hlen) {
    return needle === haystack;
  }
  outer: for (let i = 0, j = 0; i < nlen; i++) {
    let nch = needle.charCodeAt(i);
    while (j < hlen) {
      if (haystack.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}

export function id2key(idStr) {
  let [type, id] = idStr.split('/');

  return {type, id: +id};
}

export function key2id({type, id}) {
  return `${type}/${id}`;
}

export function str2categories(str) {
  return unique(words(str, /[^, ]+/g));
}
