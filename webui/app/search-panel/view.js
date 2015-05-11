import Marionette from 'marionette';

let AtomInfo = Marionette.ItemView.extend({
    tagName: 'li',
    className: 'AtomInfo'
});

export default Marionette.CompositeView.extend({
    className: 'SearchPanel',

    template: require('./view.hbs'),

    childView: AtomInfo,
    childViewContainer: 'ul'
});
