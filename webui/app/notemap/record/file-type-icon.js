'use strict';

const FileTypeIcons = {
    'image': 'picture',
    'text': 'file',
    'video': 'film'
};

export default function (type) {
    return FileTypeIcons[type] || 'file';
}
