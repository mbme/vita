import _ from 'lodash';
import AppActions    from 'actions/app-actions';
import SocketActions from 'actions/socket-actions';
import UrlActions    from 'actions/url-actions';
import NotesActions  from 'actions/notes-actions';

let actionGroups = [AppActions, SocketActions, UrlActions, NotesActions];

export default function getActions() {
  return _(actionGroups).map(_.pairs).flatten().value();
};
