import {forEach} from 'lodash';

function toJSON(resp) {
  return resp.json();
}

/*
 * Do POST request
 * @param {string} url request address
 * @param {Object} data key-value dictionary
 * @returns {Promise}
 */
export function POST(url, data) {
  return fetch(url, {
    method: 'post',
    body: toFormData(data)
  }).then(toJSON)
}

export function DELETE(url) {
  return fetch(url, {
    method: 'delete'
  })
}

export function toFormData(data) {
  let formData = new FormData();

  forEach(data, function (val, key) {
    formData.append(key, val);
  });

  return formData;
}
