import {registerAction, getStore} from 'viter/viter';

registerAction('initialized', function () {
  let AppStore = getStore('app');
  AppStore.initialized = true;

  return 'app';
});
