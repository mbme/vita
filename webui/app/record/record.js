'use strict';

import Marionette from 'marionette';
import MarkdownIt from 'markdown-it';

import fileAddr from './file-addr';

const sep = '!';
const sepChar = sep.charCodeAt(0);

let currentRecord = null;
function isAttachedFile(name) {
    return !!currentRecord.attachments.get(name);
}

function attachment(state, silent) {
    if (!currentRecord){
        return false;
    }

    if (silent) { // don't run any pairs in validation mode
        return false;
    }

    let max = state.posMax;
    let start = state.pos;

    if (state.src.charCodeAt(start) !== sepChar) {
        return false;
    }
    if (start + 2 >= max) {
        return false;
    }

    state.pos = start + 1;

    // search for end of item
    let found = false;
    while (state.pos < max) {
        if (state.src.charCodeAt(state.pos) === sepChar) {
            found = true;
            break;
        }

        state.md.inline.skipToken(state);
    }

    if (!found || start + 1 === state.pos) { // nothing found
        state.pos = start;
        return false;
    }

    let fileName = state.src.slice(start + 1, state.pos);
    if (!isAttachedFile(fileName)) {
        state.pos = start;
        return false;
    }

    // found!
    state.posMax = state.pos;
    state.pos = start + 1;

    let token = state.push('attachment_open', 'a', 1);
    token.markup  = sep;
    token.attrPush(['href', fileAddr(currentRecord.id, fileName)]);

    token = state.push('text', '', 0);
    token.content = fileName;

    token = state.push('attachment_close', 'a', -1);
    token.markup  = sep;

    state.pos = state.posMax + 1;
    state.posMax = max;
    return true;
}


let markdownIt = new MarkdownIt('default', {
    html: true,
    linkify: true,
    typographer: true
});

markdownIt.inline.ruler.push('attachment', attachment);


export default Marionette.ItemView.extend({
    className: 'Record',
    template: require('./record.hbs'),
    templateHelpers () {
        currentRecord = this.model.attributes;
        let renderedData = markdownIt.render(currentRecord.data);
        currentRecord = null;

        return {
            renderedData
        };
    }
});
