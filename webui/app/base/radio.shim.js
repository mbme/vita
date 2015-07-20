'use strict';

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['marionette', 'radio', 'underscore'], function(Marionette, Radio, _) {
            return factory(Marionette, Radio, _);
        });
    }
    else if (typeof exports !== 'undefined') {
        var Marionette = require('marionette');
        var Radio = require('radio');
        var _ = require('underscore');
        module.exports = factory(Marionette, Radio, _);
    }
    else {
        factory(root.Backbone.Marionette, root.Backbone.Radio, root._);
    }
}(this, function(Marionette, Radio, _) {
    Marionette.Application.prototype._initChannel = function () {
        this.channelName = _.result(this, 'channelName') || 'global';
        this.channel = _.result(this, 'channel') || Radio.channel(this.channelName);
    };
}));
