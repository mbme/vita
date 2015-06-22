'use strict';

import _ from 'underscore';

import session from 'base/session';
import {NoteModel, NotesCollection, OpenNotesCollection} from 'base/models';
import {successfullPromise} from 'helpers/utils';

let Storage = {
    notes: new NotesCollection(),
    openNotes: new OpenNotesCollection(),

    loadNotesList () {
        session.socket.getNotesInfoList().then((result) => {
            console.log('received list of %s notes', result.length);
            this.notes.reset(result);
        });
    },

    isNoteOpen (id) {
        return Boolean(this.openNotes.get(id));
    },

    getOpenNote (id) {
        return this.openNotes.get(id);
    },

    openNote (id, edit) {
        let note = this.getOpenNote(id);
        if (note) {
            return successfullPromise(note);
        }
        return session.socket.getNote(id).then((result) => {
            console.log('open note %s', id);

            let note = new NoteModel(result);
            if (!_.isUndefined(edit)) {
                note.edit(true);
            }

            this.openNotes.add(note, { at: 0 });

            return note;
        });
    },

    createNote (data) {
        session.socket.createNote(data).then((result) =>  {
            this.loadNotesList();
            this.openNote(result, true);
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

        console.log('saving note %s', id);
        session.socket.updateNote(note.toPublicJSON()).then(() => {
            this.loadNotesList();

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

        console.log('delete note %s', id);
        session.socket.deleteNote(id).then(() => {
            this.loadNotesList();
            this.closeNote(id);
        });
    }
};

export default Storage;
