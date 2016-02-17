import { createReactComponent } from 'viter/viter';
import cx from 'classnames';

export default createReactComponent({
  displayName: 'Category',

  render () {
    let { name, onClick, className = '' } = this.props;

    return <span className={cx('Category', className)} onClick={onClick}>{name}</span>;
  }
});
