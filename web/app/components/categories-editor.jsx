import { createReactComponent } from 'viter/viter';
import { words } from 'lodash';
import { createCategories } from 'services/entities';

export default createReactComponent({
  displayName: 'CategoriesEditor',

  shouldComponentUpdate () {
    return false;
  },

  componentWillMount () {
    this.value = this.props.defaultValue;
  },

  onChange () {
    this.value = createCategories(words(this.refs.categories.value));
  },

  render () {
    let { defaultValue, placeholder = '' } = this.props;
    return (
      <input type="text" className="CategoriesEditor" onChange={this.onChange}
             defaultValue={defaultValue.join(' ')} placeholder={placeholder} ref="categories" />
    );
  },
});
