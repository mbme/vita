import createUrlManager from './url-manager';
import createSocketManager from './socket-manager';
import createPageManager from './page-manager';
import createMessagesManager from './messages-manager';

export default function createManagers () {
  return [
    createPageManager(),
    createMessagesManager(),
    createUrlManager(),
    createSocketManager(),
  ];
}
