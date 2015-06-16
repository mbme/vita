'use strict';

const FileTypeIcons = {
    'image':    'picture',
    'document': 'file',
    'video':    'film',
    'audio':    'headphones',
    'binary':   'file'
};

export default function (type) {
    return FileTypeIcons[type];
}
