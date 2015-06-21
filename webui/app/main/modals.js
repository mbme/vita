'use strict';

import Marionette from 'marionette';
import _ from 'underscore';
import Radio from 'radio';

let modalsChannel = Radio.channel('modals');

const MODAL_OPTIONS = {
    backdrop: 'static',
    keyboard: false
};

export default Marionette.LayoutView.extend({
    className: 'modal',
    template: function () {
        return '<div class="modal-dialog"></div>';
    },

    regions: {
        'dialog': '.modal-dialog'
    },

    events: {
        'shown.bs.modal':  'onModalShown',
        'hidden.bs.modal': 'cleanup'
    },

    childEvents: {
        'before:show': 'onBeforeModalShow'
    },

    initialize () {
        this.listenTo(modalsChannel, 'modal:open', this.openModal);
    },

    openModal (modalView) {
        modalView.once('close', this.closeModal, this);
        this.getRegion('dialog').show(modalView);

        this.$el.modal(_.defaults({}, modalView.modalOptions, MODAL_OPTIONS));
    },

    onBeforeModalShow (view) {
        view.$el.addClass('modal-content');
    },

    onModalShown () {
        this.getChildView('dialog').trigger('modal:shown');
    },

    closeModal () {
        let view = this.getChildView('dialog');

        if (!view) {
            return;
        }

        this.$el.modal('hide');
    },

    cleanup () {
        this.getRegion('dialog').empty();
    }
});
