'use strict';

const B_in_KB = 1024;
const B_in_MB = B_in_KB * 1024;
const B_in_GB = B_in_MB * 1024;

export default function (bytes) {
    if (bytes < B_in_KB) {
        return bytes + 'B';
    } else if (bytes < B_in_MB) {
        return (bytes / B_in_KB).toFixed(1) + 'KB';
    } else if (bytes < B_in_GB) {
        return (bytes / B_in_MB).toFixed(2) + 'MB';
    } else {
        return (bytes / B_in_GB).toFixed(2) + 'GB';
    }
}
