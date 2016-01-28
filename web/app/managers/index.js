import createUrlManager from './url-manager';
import createSocketManager from './socket-manager';
import createPageManager from './page-manager';
import createModalsManager from './modals-manager';
import createMessagesManager from './messages-manager';

export default function createManagers () {
  return [
    createPageManager(),
    createModalsManager(),
    createMessagesManager(),
    createUrlManager(),
    createSocketManager()
  ];
}
