import {createReactComponent} from 'viter/viter';
import {noop} from 'lodash';
import cx from 'classnames';

export default createReactComponent(function Button ({type, label, onClick = noop, className = ""}) {
  return (
    <button className={cx('Button', {[`Button-${type}`]: type}, className)}
            onClick={onClick}>
      {label}
    </button>
  );
})
