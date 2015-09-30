import React from 'react';
import {partial} from 'lodash';
import {createReactComponent} from 'viter/viter';

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
      let className = pos === selected ? 'selected' : '';
      return (
        <li key={pos}
            className={className}
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
      <div className={className + " Tabs"}>
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

const Tab = createReactComponent({
  render () {
    let {children, isSelected = false} = this.props;
    let className = "Tab";
    if (isSelected) {
      className += " is-selected";
    }
    return (
      <div className={className}>
        {children}
      </div>
    )
  }
});

export {Tabs, Tab}
