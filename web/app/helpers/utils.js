import {unique, isFunction, curry} from 'lodash';
import moment from 'moment';
import {baseUrl} from 'config';

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
  return x.id === id;
});

const B_in_KB = 1024;
const B_in_MB = B_in_KB * 1024;
const B_in_GB = B_in_MB * 1024;

export function formatBytes(bytes) {
    if (bytes < B_in_KB) {
        return bytes + 'B';
    } else if (bytes < B_in_MB) {
        return (bytes / B_in_KB).toFixed(1) + 'KB';
    } else if (bytes < B_in_GB) {
        return (bytes / B_in_MB).toFixed(2) + 'MB';
    } else {
        return (bytes / B_in_GB).toFixed(2) + 'GB';
    }
}

export function formatFileTs(ts) {
  return moment.unix(ts).format("DD.MM.YYYY HH:mm");
}

export function stringsComparator(str1, str2) {
  return str1.localeCompare(str2);
}

export const buildAttachmentUrl = curry(function (key, name) {
  return `${baseUrl}/notes/${key.type}/${key.id}/attachments/${name}`;
});
