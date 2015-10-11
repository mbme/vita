import {bus} from 'viter/viter';
import {createDeferred} from 'helpers/utils';
import Button from 'components/common/button';

let modalId = 0;

function openModal(config) {
  bus.publish('modal:open', config);
}

function closeModal(id) {
  bus.publish('modal:close', id);
}

export function createConfirmationDialog (config) {
  let id = modalId += 1;
  let deferred = createDeferred();

  let title = '';
  if (config.title) {
    title = <h1>{config.title}</h1>
  }

  let onCancel = function () {
    deferred.reject();
    closeModal(id);
  };

  let onSuccess = function () {
    deferred.resolve();
    closeModal(id);
  };

  openModal({
    type: config.type,
    showExitIcon: config.showExitIcon || false,
    id,
    title,
    body: config.body,
    buttons: [
      <Button label="Cancel" onClick={onCancel}/>,
      <Button label={config.confirmationButton || 'OK'} onClick={onSuccess} type="primary" />
    ],
    onCancel
  });

  return deferred.promise;
}