import { forEach } from 'lodash';

/**
 * Execute XMLHttpRequest.
 * @param {string!} requestType HTTP request type
 * @param {string!} url request url
 * @param {Blob|String|Document|FormData} [data] request body
 * @returns {Promise}
 */
function xhr (requestType, url, data) {
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();

    request.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(this.response);
      } else {
        reject(new Error(this.responseText));
      }
    };
    request.onerror = reject;
    request.onabor = reject;

    request.open(requestType, url, true);

    request.send(data);
  });
}

/**
 * Convert plain object into FormData object.
 * @param {object} data plain JS object
 * @returns {FormData}
 */
function toFormData (data) {
  let formData = new FormData();

  forEach(data, function (val, key) {
    formData.append(key, val);
  });

  return formData;
}

/**
 * Do POST HTTP request
 * @param {string} url request address
 * @param {Object} data key-value dictionary
 * @returns {Promise}
 */
export function httpPost (url, data) {
  return xhr('POST', url, toFormData(data));
}

/**
 * Do DELETE HTTP request
 * @param {string} url request address
 * @returns {Promise}
 */
export function httpDelete (url) {
  return xhr('DELETE', url);
}
