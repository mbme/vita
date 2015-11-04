/*global VITA_PORT*/
import {stringsComparator} from 'helpers/utils';

const port = VITA_PORT || window.location.port;
const basePath = `${window.location.hostname}:${port}`;

/**
 * Compare info records by name.
 *
 * @param {NoteInfoRecord} rec1
 * @param {NoteInfoRecord} rec2
 */
function infoRecordNamesComparator(rec1, rec2) {
  return stringsComparator(rec1.name, rec2.name);
}

export default {
  searchDelay: 200,
  searchIgnoreCase: true,
  basePath,
  baseUrl: `http://${basePath}`,

  searchResultsComparator: infoRecordNamesComparator
}
