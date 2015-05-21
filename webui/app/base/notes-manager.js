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
        return Boolean(this.openNotes.get(id));
    }

    /*
     * @param {number!} id
     */
    getOpenNote (id) {
        return this.openNotes.get(id);
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

    /*
     * @param {number!} id
     * @param {boolean} [edit=false]
     */
    editNote (id, edit) {
        this.openNotes.get(id).set('edit', Boolean(edit));
    }

    /*
     * @param {number!} id
     */
    closeNote (id) {
        this.openNotes.remove(id);
    }
}
