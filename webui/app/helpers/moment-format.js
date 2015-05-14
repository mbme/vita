'use strict';

import moment from 'moment';

export default function (ts) {
    return moment.unix(ts).format("DD.MM.YYYY HH:mm");
}
