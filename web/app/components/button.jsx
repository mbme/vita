import { createReactComponent } from 'viter/viter';
import cx from 'classnames';

export default createReactComponent({
  displayName: 'Button',

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
