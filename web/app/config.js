/*global VITA_PORT*/
import {stringsComparator} from 'helpers/utils';

const port = VITA_PORT || window.location.port;

/**
 * Compare info records by name.
 *
 * @param {NoteInfoRecord} rec1
 * @param {NoteInfoRecord} rec2
 */
function infoRecordNamesComparator(rec1, rec2) {
  return stringsComparator(rec1.name, rec2.name);
}

export const searchDelay = 200;
export const searchIgnoreCase = true;
export const basePath = `${window.location.hostname}:${port}`;
export const baseUrl = `http://${basePath}`;
export const searchResultsComparator = infoRecordNamesComparator;
