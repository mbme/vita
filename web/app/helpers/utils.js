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

export function parseIdsStr(idsStr) {
  let matches = (idsStr || '').match(/^\(([\d, ]*)\)$/);
  if (!matches) {
    return [];
  }

  return unique(matches[1].match(/(\d+)/g).map(x => parseInt(x, 10)));
}
