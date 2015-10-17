import {unique, words, isFunction, curry} from 'lodash';
import Immutable from 'immutable';

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
export const fuzzySearch = curry(function (needle, haystack) {
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
})

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

/*
 * Check if element is focused.
 * Accepts native elements and custom components with `isFocused` property.
 *
 * @param {Component|Element} el element to check if focused
 * @returns {boolean}
 */
export function isFocused(el) {
  // handle our custom react components
  if (isFunction(el.isFocused)) {
    return el.isFocused();
  }

  if (el.hasOwnProperty('isFocused')) {
    return el.isFocused;
  }

  // handle native elements
  return el.matches(':focus');
}

export function createDeferred() {
  let deferred = {};

  deferred.promise = new Promise(function (resolve, reject) {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });

  return deferred;
};

/*
 * @returns Promise
 */
export function resolvedPromise() {
  return new Promise(function (resolve) {
    resolve();
  });
};

/*
 * @returns Promise
 */
export function rejectedPromise() {
  return new Promise(function (resolve, reject) {
    reject();
  });
};

export const byId = curry(function (id, x) {
  if (Immutable.Map.isMap(x)) {
    return x.get('id') === id;
  } else {
    return x.id === id;
  }
})
