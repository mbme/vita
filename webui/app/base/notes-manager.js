'use strict';

import _ from 'underscore';
import {NoteModel} from 'base/models';

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
        let note = new NoteModel(data);
        if (!_.isUndefined(edit)) {
            note.edit(true);
        }

        this.openNotes.add(note, { at: 0 });
    }

    /*
     * @param {number!} id
     */
    closeNote (id) {
        this.openNotes.remove(id);
    }
}
