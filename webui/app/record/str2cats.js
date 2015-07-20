'use strict';

import _ from 'underscore';

export default function (str) {
    return _.words(str, /[^, ]+/g);
}
