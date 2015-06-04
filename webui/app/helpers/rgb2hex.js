'use strict';

import _ from 'underscore';

function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

export default function rgbToHex(rgb) {
    let channels = _.words(rgb, /\d+/g).map(function (str) {
        return parseInt(str, 10);
    });

    return "#" +
        componentToHex(channels[0]) +
        componentToHex(channels[1]) +
        componentToHex(channels[2]);
}
