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
