import { debounce } from 'lodash';

import { bus } from 'init';
import { createReactContainer } from 'viter/viter';
import { fuzzySearch } from 'helpers/utils';
import { updateFilter } from 'controllers/app-controller';
import { newNote, openNote, loadNotesList } from 'controllers/notes-controller';

import SearchItem from './item';
import SearchInput from './input';
import Icon from 'components/icon';
import { searchDelay, searchIgnoreCase } from 'config';

const dispatchFilterUpdate = debounce(updateFilter, searchDelay);

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

  onSearchItemClick ({ selected, id }) {
    // if note is already open then just focus it
    if (selected) {
      bus.publish('note:focus', id);
    } else {
      // else open and focus
      openNote(id).then(function () {
        bus.publish('note:focus', id);
      });
    }
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
        <SearchInput filter={searchFilter} onChange={dispatchFilterUpdate} />
        <ul className="SearchPanel-scroll">
          {results.map(info => <SearchItem key={info.id} info={info} onClick={this.onSearchItemClick} />)}
        </ul>
      </div>
    );
  }
});
