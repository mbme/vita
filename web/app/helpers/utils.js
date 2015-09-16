import {unique} from 'lodash';

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
  let matches = match(idsStr, /^\(([\d, ]*)\)$/);

  return unique(match(matches[1], /(\d+)/g).map(x => parseInt(x, 10)));
}

// https://github.com/bevacqua/fuzzysearch
export function fuzzySearch(needle, haystack) {
    let nlen = needle.length;
    if (!nlen) { // if needle is empty then it matches everything
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
