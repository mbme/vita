'use strict';

import RSVP from 'rsvp';
import $ from 'jquery';

export function successfullPromise (result) {
    return new RSVP.Promise(function (resolve) {
        resolve(result);
    });
}

export function failedPromise (result) {
    return new RSVP.Promise(function (resolve, reject) {
        reject(result);
    });
}

export function autofocus ($el) {
    $('[autofocus]:first', $el).focus();
}
