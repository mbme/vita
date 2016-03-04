import createNotesService from 'services/notes-service';

describe('Notes Service', function () {
  function noteObj () {
    return {
      key: {},
    };
  }

  function attachmentObj () {
    return {};
  }

  it('should allow to retrieve notes', function () {
    let store = { notes: [] };
    let service = createNotesService(store);

    let notes = service.getNotes();
    expect(notes).to.equal(store.notes);
  });

  it('should add note', function () {
    let store = { notes: [] };
    let service = createNotesService(store);

    service.addNote(noteObj());

    expect(store.notes).to.have.lengthOf(1);
  });

  it('should remove note', function () {
    let store = { notes: [] };
    let service = createNotesService(store);

    service.addNote(noteObj());

    service.removeNote(store.notes[0].nId);
    expect(store.notes).to.have.lengthOf(0);
  });

  it('should retrieve note', function () {
    let store = { notes: [] };
    let service = createNotesService(store);

    service.addNote(noteObj());

    let note = service.getNote(store.notes[0].nId);
    expect(note).to.exist;
  });

  it('should retrieve note by id', function () {
    let store = { notes: [] };
    let service = createNotesService(store);

    service.addNote(noteObj());

    let note = service.getNoteById(store.notes[0].id);
    expect(note).to.exist;
  });

  it('should update note', function () {
    let store = { notes: [] };
    let service = createNotesService(store);

    service.addNote(noteObj());

    let nId = store.notes[0].nId;
    service.updateNote(nId, { name: 'test' });

    let note = service.getNote(nId);
    expect(note.name).to.equal('test');
  });

  it('should create note of specified type', function () {
    let store = { notes: [] };
    let service = createNotesService(store);

    let type = '123123';
    service.newNote(type);

    let note = service.getNote(store.notes[0].nId);
    expect(note.key.type).to.equal(type);
  });

  it('should attach file', function () {
    let store = { notes: [] };
    let service = createNotesService(store);

    service.newNote('1231');

    service.addAttachment(store.notes[0].nId, attachmentObj());

    let note = service.getNote(store.notes[0].nId);
    expect(note.attachments).to.have.lengthOf(1);
  });

  it('should remove attachment', function () {
    let store = { notes: [] };
    let service = createNotesService(store);

    service.newNote('1231');
    let nId = store.notes[0].nId;
    service.addAttachment(nId, attachmentObj());

    let attachment = service.getNote(nId).attachments[0];
    service.removeAttachment(nId, attachment.name);

    let note = service.getNote(nId);
    expect(note.attachments).to.have.lengthOf(0);
  });
});
