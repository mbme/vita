import {createReactComponent} from 'viter/viter';
import {str2categories, isFocused} from 'helpers/utils';

export default createReactComponent({
  displayName: 'CategoriesEditor',

  isFocused () {
    return this.isMounted() && isFocused(this.refs.categories);
  },

  componentWillMount () {
    this.value = this.props.defaultValue;
  },

  render () {
    let {defaultValue = []} = this.props;
    return (
      <input type="text" className="CategoriesEditor" onChange={this.onChange}
             defaultValue={defaultValue.join(' ')} placeholder="Categories" ref="categories"/>
    )
  },

  onChange () {
    this.value = str2categories(this.refs.categories.value);
  }
})
