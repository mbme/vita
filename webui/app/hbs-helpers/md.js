'use strict';

import MarkdownIt from 'markdown-it';

let markdownIt = new MarkdownIt('default', {
    html: true,
    linkify: true,
    typographer: true
});

export default function (data) {
    return markdownIt.render(data);
}
