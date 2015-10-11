import {createReactComponent} from 'viter/viter';
import {noop} from 'lodash';
import cx from 'classnames';

export default createReactComponent(function Icon ({type, onClick = noop, className = ""}) {
  return <i className={cx('Icon', 'icon', `ion-${type}`, className)} onClick={onClick}></i>;
})
