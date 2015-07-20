'use strict';

import $ from 'jquery';
import Marionette from 'marionette';
import Validation from 'backbone-validation';

export default Marionette.Behavior.extend({
    defaults: {
        transformers: {}
    },

    events: {
        'blur [data-name]': 'onBlur'
    },

    onRender () {
        Validation.bind(this.view, {
            forceUpdate: true,
            valid: (_, attr) => this.updateField(attr),
            invalid: (_, attr, error) => this.updateField(attr, error)
        });
    },

    prepareValue (attr, val) {
        let transformer = this.options.transformers[attr];

        return transformer ? transformer(val) : val;
    },

    onBlur (e) {
        let $el = $(e.currentTarget);

        let name = $el.attr('data-name');
        let value = this.prepareValue(name, $el.val());

        this.view.model.set(name, value);
        this.view.model.isValid(name);
    },

    updateField (attr, error) {
        let $el = this.$(`[data-name=${attr}]`).parents('.form-group');

        $el.toggleClass('has-error', !!error);

        $el.find('.error-label').html(error);
    }
});
