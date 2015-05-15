'use strict';

import Marionette from 'marionette';

import session from 'session';


export default Marionette.LayoutView.extend({
    className: 'modal',
    template: function () {
        return '<div class="modal-dialog"></div>';
    },

    regions: {
        'dialog': '.modal-dialog'
    },

    events: {
        'hidden.bs.modal': 'cleanup'
    },

    childEvents: {
        'before:show': 'onBeforeModalShow'
    },

    initialize () {
        session.bus.on('modal:open', this.openModal, this);
    },

    openModal (modalView) {
        modalView.once('close', this.closeModal, this);
        this.getRegion('dialog').show(modalView);

        this.$el.modal(modalView.modalOptions || {});
    },

    onBeforeModalShow (view) {
        view.$el.addClass('modal-content');
    },

    closeModal () {
        let view = this.getRegion('dialog').currentView;

        if (!view) {
            return;
        }

        this.$el.modal('hide');
    },

    cleanup () {
        this.getRegion('dialog').empty();
    },

    onDestroy () {
        session.bus.off('modal:open', this.openModal, this);
    }
});
