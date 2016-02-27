import { createReactComponent } from 'viter/viter';
import cx from 'classnames';

export default createReactComponent({
  displayName: 'Icon',

  render () {
    let { type, onClick, className = '' } = this.props;
    return <i className={cx('Icon', 'icon', `ion-${type}`, className)} onClick={onClick}></i>;
  },
});
