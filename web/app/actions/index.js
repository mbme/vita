import _ from 'lodash';
import AppActions    from 'actions/app-actions';
import SocketActions from 'actions/socket-actions';
import UrlActions    from 'actions/url-actions';

let actionGroups = [AppActions, SocketActions, UrlActions];

export default function getActions() {
  return _(actionGroups).map(_.pairs).flatten().value();
};
