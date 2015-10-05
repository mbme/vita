import createAppStore from './app-store';
import createNetStore from './net-store';
import createNotesStore from './notes-store';
import createNotesInfoStore from './notes-info-store';

export default function createStores() {
  return {
    'app':        createAppStore(),
    'net':        createNetStore(),
    'notes-info': createNotesInfoStore(),
    'notes':      createNotesStore()
  };
}
