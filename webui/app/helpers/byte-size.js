'use strict';

const B_in_KB = 1024;
const B_in_MB = B_in_KB * 1024;
const B_in_GB = B_in_MB * 1024;

function formatBytes(bytes) {
    return bytes.toFixed(2);
}

export default function (bytes) {
    if (bytes < B_in_KB) {
        return bytes + ' B';
    } else if (bytes < B_in_MB) {
        return formatBytes(bytes / B_in_KB) + ' KB';
    } else if (bytes < B_in_GB) {
        return formatBytes(bytes / B_in_MB) + ' MB';
    } else {
        return formatBytes(bytes / B_in_GB) + ' GB';
    }
}
