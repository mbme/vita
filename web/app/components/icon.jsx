import { createReactComponent, PropTypes } from 'viter/viter';
import cx from 'classnames';

export default createReactComponent({
  displayName: 'Icon',

  propTypes: {
    type:      PropTypes.string.isRequired,
    onClick:   PropTypes.func,
    className: PropTypes.string,
  },

  render () {
    let { type, onClick, className = '' } = this.props;
    return <i className={cx('Icon', 'icon', `ion-${type}`, className)} onClick={onClick}></i>;
  },
});
