'use strict';

import moment from 'moment';

/*
 * @param {number} ts timestamp in seconds
 */
export default function (ts) {
    return moment.unix(ts).format("DD.MM.YYYY HH:mm");
}
