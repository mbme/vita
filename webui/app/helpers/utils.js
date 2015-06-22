'use strict';

import RSVP from 'rsvp';

export let successfullPromise = function (result) {
    return new RSVP.Promise(function (resolve) {
        resolve(result);
    });
};
