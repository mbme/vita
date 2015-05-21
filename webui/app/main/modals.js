'use strict';

import Marionette from 'marionette';
import _ from 'underscore';

import bus from 'base/bus';

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
        bus.on('modal:open', this.openModal, this);
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
    },

    onDestroy () {
        bus.off('modal:open', this.openModal, this);
    }
});
