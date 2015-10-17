import ReactDOM from 'react-dom';

import {createComponent} from 'viter/viter';
import Modal from 'components/common/modal';

// Modals renderer
export default function createModalsManager() {
  return createComponent({
    stores: ['app'],

    getState (AppStore) {
      return AppStore.modals;
    },

    shouldUpdate (state, newState) {
      return state !== newState;
    },

    render (state) {
      let container = document.getElementById('modals-container');
      let modalConfig = state.last();

      if (modalConfig) {
        let component = (
          <div className="Modals">
            <div className="ModalBackdrop"></div>
            <Modal config={modalConfig} />
          </div>
        );
        ReactDOM.render(component, container)
      } else {
        ReactDOM.unmountComponentAtNode(container);
      }
    }
  });
}
