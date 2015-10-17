import {createReactContainer, bus} from 'viter/viter';
import {fuzzySearch} from 'helpers/utils';

import SearchItems from './items';
import SearchInput from './input';
import Icon from 'components/common/icon';

function getSearchType(filter) {
  if (filter) {
    return "Search Results";
  }

  return "All notes";
}

export default createReactContainer({
  displayName: 'SearchPanel',

  stores:  ['notes-info', 'app'],

  getState (NotesInfoStore, AppStore) {
    return {
      infos: NotesInfoStore.infos,
      filter: AppStore.searchFilter,
      selectedIds: AppStore.selectedIds
    };
  },

  render () {
    let {infos, filter, selectedIds} = this.state;
    let results = infos.filter(i => fuzzySearch(filter, i.name));
    return (
      <div className="SearchPanel">
        <div className="SearchPanel-header">
          <span className="search-type">{getSearchType(filter)}</span>
          <span className="results-count">{results.length}</span>
          <Icon className="plus" type="plus" onClick={this.createNote}/>
        </div>
        <SearchInput filter={filter} />
        <div className="SearchPanel-scroll">
          <SearchItems results={results} selectedIds={selectedIds}/>
        </div>
      </div>
    )
  },

  createNote () {
    bus.publish('note:create');
  }
})
