import ReactDOM from 'react-dom';

import { createComponent } from 'viter/viter';

// Modals renderer
export default function createModalsManager () {
  return createComponent({
    stores: ['app'],

    getState (AppStore) {
      return AppStore.modals;
    },

    render (state) {
      let container = document.getElementById('modals-container');
      let modal = state.last();

      if (modal) {
        let component = (
          <div className="Modals">
            <div className="ModalBackdrop"></div>
            {modal.view}
          </div>
        );
        ReactDOM.render(component, container);
        document.body.classList.add('no-scroll');
      } else {
        ReactDOM.unmountComponentAtNode(container);
        document.body.classList.remove('no-scroll');
      }
    }
  });
}
