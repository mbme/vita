'use strict';

import _ from 'underscore';
import RSVP from 'rsvp';
import Marionette from 'marionette';
import Radio from 'radio';

import {autofocus} from 'helpers/utils';

import {Model as ConfirmationModel, View as ConfirmationView} from './confirmation';

let modalsChan = Radio.channel('modals');

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
        this.listenTo(modalsChan, 'modal:open', this.openModal);
        modalsChan.reply('confirmation', this.showConfirmation, this);
    },

    showConfirmation (config) {
        let deferred = RSVP.defer();
        let model = new ConfirmationModel(config);

        let view = new ConfirmationView({
            deferred,
            model
        });
        this.openModal(view);

        return deferred.promise;
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
        let view = this.getChildView('dialog');
        autofocus(view.$el);
        view.trigger('modal:shown');
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
