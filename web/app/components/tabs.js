import React from 'react';
import {partial} from 'lodash';
import {createReactComponent} from 'viter/viter';
import cx from 'classnames';

const Tabs = createReactComponent({
  getInitialState () {
    return {
      selected: 0
    }
  },

  render () {
    let {children, className = ""} = this.props;
    let {selected} = this.state;

    let headers = children.map((child, pos) => {
      return (
        <li key={pos}
            className={cx({selected: pos === selected})}
            onClick={partial(this.onHeaderClicked, pos)}>
          {child.props.label}
        </li>
      );
    });

    let tabs = children.map(function (child, pos) {
      return React.cloneElement(child, {
        key: pos,
        isSelected: pos === selected
      })
    });

    return (
      <div className={cx('Tabs', className)}>
        <ul className="Tabs-headers">{headers}</ul>
        {tabs}
      </div>
    )
  },

  onHeaderClicked (selected) {
    if (selected === this.state.selected) {
      return;
    }

    if (this.props.onBeforeChange) {
      this.props.onBeforeChange(selected, this.state.selected);
    }

    this.setState({selected});
  }
});

const Tab = createReactComponent(function Tab ({children, isSelected = false, className}) {
  return (
    <div className={cx('Tab', className, {'is-selected': isSelected})}>
      {children}
    </div>
  )
}
);

export {Tabs, Tab}
