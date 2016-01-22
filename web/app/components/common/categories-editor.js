import { createReactComponent } from 'viter/viter';
import { words } from 'lodash';
import { isFocused } from 'helpers/utils';
import { createCategories } from 'stores/entities';

export default createReactComponent({
  displayName: 'CategoriesEditor',

  shouldComponentUpdate () {
    return false;
  },

  componentWillMount () {
    this.value = this.props.defaultValue;
  },

  render () {
    let { defaultValue, placeholder = '' } = this.props;
    return (
      <input type="text" className="CategoriesEditor" onChange={this.onChange}
             defaultValue={defaultValue.join(' ')} placeholder={placeholder} ref="categories"/>
    );
  },

  onChange () {
    this.value = createCategories(words(this.refs.categories.value));
  },

  isFocused () {
    return this.isMounted() && isFocused(this.refs.categories);
  }
});
