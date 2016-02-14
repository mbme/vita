import { createReactComponent } from 'viter/viter';
import cx from 'classnames';

export default createReactComponent(function Icon ({ type, onClick, className = '' }) {
  return <i className={cx('Icon', 'icon', `ion-${type}`, className)} onClick={onClick}></i>;
});
