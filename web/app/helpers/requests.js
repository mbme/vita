import {forEach} from 'lodash';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    return response.text().then(function (text) {
      let error = new Error(text)
      error.response = response
      throw error
    })
  }
}

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
  }).then(checkStatus).then(toJSON)
}

export function DELETE(url) {
  return fetch(url, {
    method: 'delete'
  }).then(checkStatus)
}

export function toFormData(data) {
  let formData = new FormData();

  forEach(data, function (val, key) {
    formData.append(key, val);
  });

  return formData;
}
