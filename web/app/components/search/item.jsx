import { createReactComponent } from 'viter/viter';
import cx from 'classnames';

import Category from 'components/category';
import TimeAgo from 'components/time-ago';

export default createReactComponent({
  displayName: 'SearchItem',

  render () {
    let { selected, name, categories, timestamp } = this.props.info;
    return (
      <li className={cx('SearchItem', { 'is-selected': selected })} onClick={this.onClick}>
        <span className="name">{name}</span>
        <TimeAgo timestamp={timestamp}/>
        &nbsp;|&nbsp;
        {categories.map(cat => <Category key={cat} name={cat} />)}
      </li>
    );
  },

  onClick () {
    let { info } = this.props;
    this.props.onClick(info);
  }
});
