import { createReactComponent, PropTypes } from 'viter/viter';
import cx from 'classnames';

export default createReactComponent({
  displayName: 'Category',

  propTypes: {
    name:      PropTypes.string.isRequired,
    onClick:   PropTypes.func,
    className: PropTypes.string,
  },

  render () {
    let { name, onClick, className = '' } = this.props;

    return <span className={cx('Category', className)} onClick={onClick}>{name}</span>;
  },
});
