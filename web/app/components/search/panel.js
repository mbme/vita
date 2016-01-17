import {createReactContainer} from 'viter/viter';
import {fuzzySearch} from 'helpers/utils';
import {newNote, loadNotesList} from 'actions/notes-actions';

import SearchItem from './item';
import SearchInput from './input';
import Icon from 'components/common/icon';
import {searchIgnoreCase} from 'config';

function getSearchType(filter) {
  if (filter) {
    return "Search Results";
  }

  return "All notes";
}

function lowerIfRequired(str) {
  if (searchIgnoreCase) {
    return str.toLowerCase();
  }

  return str;
}

export default createReactContainer({
  displayName: 'SearchPanel',

  stores:  ['notes-info', 'app'],

  getState (NotesInfoStore, AppStore) {
    return {
      infos: NotesInfoStore.infos,
      filter: AppStore.searchFilter
    };
  },

  componentWillMount () {
    loadNotesList();
  },

  render () {
    let {infos, filter} = this.state;
    let matcher = fuzzySearch(lowerIfRequired(filter));
    let results = infos.filter(i => matcher(lowerIfRequired(i.name)));
    return (
      <div className="SearchPanel">
        <div className="SearchPanel-header">
          <span className="search-type">{getSearchType(filter)}</span>
          <span className="results-count">{results.size}</span>
          <Icon className="plus" type="plus" onClick={newNote}/>
        </div>
        <SearchInput filter={filter} />
        <ul className="SearchPanel-scroll">
          {results.map(info => <SearchItem key={info.id} note={info} />)}
        </ul>
      </div>
    )
  }
})
