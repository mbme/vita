import React from 'react';
import SearchPanel from 'components/search/panel';
import Desk from 'components/desk';

export default class MainPage extends React.Component {
  render () {
    return (
      <div className="MainPage">
        <div className="MainPage-left-panel"><SearchPanel /></div>
        <div className="MainPage-content"><Desk /></div>
      </div>
    )
  }
}
