import { createReactContainer } from 'viter/viter';
import { fuzzySearch } from 'helpers/utils';
import { newNote, loadNotesList } from 'controllers/notes-controller';

import SearchItem from './item';
import SearchInput from './input';
import Icon from 'components/icon';
import { searchIgnoreCase } from 'config';

function getSearchType (filter) {
  if (filter) {
    return 'Search Results';
  }

  return 'All notes';
}

function lowerIfRequired (str) {
  if (searchIgnoreCase) {
    return str.toLowerCase();
  }

  return str;
}

export default createReactContainer({
  displayName: 'SearchPanel',

  getState ({ infos, searchFilter }) {
    return { infos, searchFilter };
  },

  componentWillMount () {
    loadNotesList();
  },

  render () {
    let { infos, searchFilter } = this.state;
    let matcher = fuzzySearch(lowerIfRequired(searchFilter));
    let results = infos.filter(i => matcher(lowerIfRequired(i.name)));
    return (
      <div className="SearchPanel">
        <div className="SearchPanel-header">
          <span className="search-type">{getSearchType(searchFilter)}</span>
          <span className="results-count">{results.size}</span>
          <Icon className="plus" type="plus" onClick={newNote}/>
        </div>
        <SearchInput filter={searchFilter} />
        <ul className="SearchPanel-scroll">
          {results.map(info => <SearchItem key={info.id} note={info} />)}
        </ul>
      </div>
    );
  }
});
