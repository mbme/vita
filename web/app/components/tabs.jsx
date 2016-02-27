import { partial } from 'lodash';
import { createReactComponent } from 'viter/viter';
import cx from 'classnames';

const Tabs = createReactComponent({
  displayName: 'Tabs',

  getInitialState () {
    return {
      selected: 0,
    };
  },

  onHeaderClicked (selected) {
    if (selected === this.state.selected) {
      return;
    }

    if (this.props.onBeforeChange) {
      this.props.onBeforeChange(selected, this.state.selected);
    }

    this.setState({ selected });
  },

  render () {
    let { children, className = '' } = this.props;
    let { selected } = this.state;

    let headers = children.map((child, pos) => {
      let clickHandler = partial(this.onHeaderClicked, pos);

      let { label } = child.props;
      if (!label) {
        throw new Error("Tabs: child component must have attribute 'label'");
      }

      return (
        <li key={pos}
            className={cx({ 'is-selected': pos === selected })}
            onClick={clickHandler}>
          {label}
        </li>
      );
    });

    let tabs = children.map(function (child, pos) {
      return (
        <div key={pos} className={cx('Tab', { 'is-selected': pos === selected })}>
          {child}
        </div>
      );
    });

    return (
      <div className={cx('Tabs', className)}>
        <ul className="Tabs-headers">{headers}</ul>
        {tabs}
      </div>
    );
  },
});

export default Tabs;
