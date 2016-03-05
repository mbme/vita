import { createReactComponent, PropTypes } from 'viter/viter';
import cx from 'classnames';

import Category from 'components/category';
import TimeAgo from 'components/time-ago';

export default createReactComponent({
  displayName: 'SearchItem',

  propTypes: {
    info:    PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  },

  onClick () {
    let { info } = this.props;
    this.props.onClick(info);
  },

  render () {
    let { selected, name, categories, timestamp } = this.props.info;
    return (
      <li className={cx('SearchItem', { 'is-selected': selected })} onClick={this.onClick}>
        <span className="name">{name}</span>
        <TimeAgo timestamp={timestamp} />
        &nbsp;|&nbsp;
        {categories.map(cat => <Category key={cat} name={cat} />)}
      </li>
    );
  },
});
