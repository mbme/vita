import { createReactComponent, PropTypes } from 'viter/viter';
import cx from 'classnames';

export default createReactComponent({
  displayName: 'Button',

  propTypes: {
    label:     PropTypes.string.isRequired,
    type:      PropTypes.string,
    onClick:   PropTypes.func,
    className: PropTypes.string,
  },

  render () {
    let { type, label, onClick, className = '' } = this.props;
    return (
      <button className={cx('Button', { [`Button-${type}`]: type }, className)}
              onClick={onClick}>
        {label}
      </button>
    );
  },
});
