import createAppService from './app-service';
import createNetService from './net-service';
import createFilesService from './files-service';
import createNotesService from './notes-service';
import createNotesInfoService from './notes-info-service';

export default function createServices (STORE) {
  return {
    app:       createAppService(STORE),
    net:       createNetService(STORE),
    files:     createFilesService(STORE),
    notes:     createNotesService(STORE),
    notesInfo: createNotesInfoService(STORE),
    inBatch:   STORE.inBatch.bind(STORE),
  };
}
