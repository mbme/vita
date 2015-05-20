'use strict';

import _ from 'underscore';

export default class NotesManager {
    constructor(notes, openNotes) {
        this.notes = notes;
        this.openNotes = openNotes;
    }

    updateList (newNotes) {
        this.notes.reset(newNotes);
    }

    /*
     * @param {number!} id
     */
    isNoteOpen (id) {
        return this.openNotes.contains(id);
    }

    /*
     * @param {object} data
     * @param {Boolean} [edit=false]
     */
    openNote (data, edit) {
        if (!_.isUndefined(edit)) {
            data.edit = Boolean(edit);
        }

        this.openNotes.add(data, { at: 0 });
    }
}
