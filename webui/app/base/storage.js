'use strict';

import _ from 'underscore';
import Backbone from 'backbone';

import session from 'base/session';
import {NoteModel} from 'base/models';
import {successfullPromise, failedPromise} from 'helpers/utils';

let NotesCollection = Backbone.Collection.extend({
    model: NoteModel,
    comparator (m1, m2) {
        let n1 = m1.getName().toLowerCase();
        let n2 = m2.getName().toLowerCase();

        if (n1 > n2) {
            return 1;
        } else if (n1 < n2) {
            return -1;
        } else {
            return 0;
        }
    }
});

let OpenNotesCollection = Backbone.Collection.extend({
    model: NoteModel,

    addNote (note) {
        this.add(note, { at: 0 });
    }
});

let Storage = {
    notes:     new NotesCollection(),
    openNotes: new OpenNotesCollection(),

    loadNotesList () {
        return session.socket.getNotesInfoList().then((result) => {
            console.log('received list of %s notes', result.length);
            this.notes.reset(result);
        });
    },

    isNoteOpen (id) {
        return Boolean(this.openNotes.get(id));
    },

    getNoteInfo (id) {
        return this.notes.get(id);
    },

    getOpenNote (id) {
        return this.openNotes.get(id);
    },

    openNote (id, edit) {
        let note = this.getOpenNote(id);
        if (note) {
            return successfullPromise(note);
        }

        let info = this.getNoteInfo(id);
        if (!info) {
            console.error('unknown note %s', id);
            return failedPromise();
        }

        return session.socket.getNote(info.getKey()).then((result) => {
            console.log('open note %s', id);

            let note = new NoteModel(result);
            if (!_.isUndefined(edit)) {
                note.edit(true);
            }

            this.openNotes.addNote(note);

            return note;
        });
    },

    createNote (data) {
        session.socket.createNote(data).then((result) =>  {
            let note = new NoteModel(result);
            console.log('open note %s', note.getId());

            note.edit(true);

            this.openNotes.addNote(note);

            this.loadNotesList();
        });
    },

    editNote (id) {
        let note = this.getOpenNote(id);

        if (!note) {
            console.error('cannot edit note %s: not open', id);
            return;
        }

        console.log('edit note %s', id);
        note.edit(true);
    },

    closeNote (id) {
        if (!this.isNoteOpen(id)) {
            console.error('cannot close note %s: not open', id);
            return;
        }

        console.log('close note %s', id);
        this.openNotes.remove(id);
    },

    saveNote (id) {
        let note = this.getOpenNote(id);

        if (!note) {
            console.error('cannot save note %s: not open', id);
            return;
        }

        if (!note.hasChanges()) {
            console.log('saving note %s: not changed', id);
            note.edit(false);
            return;
        }

        console.log('saving note %s', id);
        session.socket.updateNote(note.toPublicJSON()).then((result) => {
            this.loadNotesList();

            delete result.attachments;
            note.set(result);

            note.edit(false);

            note.commitAttributes();
        }, function (err) {
            console.error('cannot save note %s: %s', id, err);
        });
    },

    deleteNote (id) {
        if (!this.isNoteOpen(id)) {
            console.error('cannot delete note %s: not open', id);
            return;
        }

        let info = this.getNoteInfo(id);
        if (!info) {
            console.error('unknown note %s', id);
            return;
        }

        console.log('delete note %s', id);
        session.socket.deleteNote(info.getKey()).then(() => {
            this.loadNotesList();
            this.closeNote(id);
        });
    }
};

export default Storage;
