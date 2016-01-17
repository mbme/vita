import createUrlRenderer   from './url-renderer';
import createSocketManager from './socket-manager';
import createPageManager   from './page-manager';
import createModalsManager  from './modals-manager';
import createMessageSender from './message-sender';

export default function createWatchers() {
  return [
    createPageManager(),
    createModalsManager(),
    createMessageSender(),
    createUrlRenderer(),
    createSocketManager()
  ];
}
