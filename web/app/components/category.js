import {createReactComponent} from 'viter/viter';
import {noop} from 'lodash';
import cx from 'classnames';

export default createReactComponent(function Caategory ({name, onClick = noop, className = ""}) {
  return <span className={cx('Category', className)} onClick={onClick}>{name}</span>;
})
