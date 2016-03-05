import { debounce } from 'lodash';

import { bus } from 'init';
import { createReactComponent, connectReactComponent, PropTypes } from 'viter/viter';
import { fuzzySearch } from 'helpers/utils';

import SearchItem from './item';
import SearchInput from './input';
import Icon from 'components/icon';
import { searchDelay, searchIgnoreCase } from 'config';


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

const SearchPanel = createReactComponent({
  displayName: 'SearchPanel',

  propTypes: {
    loadNotesList: PropTypes.func.isRequired,
    openNote:      PropTypes.func.isRequired,
    newNote:       PropTypes.func.isRequired,
    infos:         PropTypes.arrayOf(PropTypes.object).isRequired,
    updateFilter:  PropTypes.func.isRequired,
    searchFilter:  PropTypes.string.isRequired,
  },

  componentWillMount () {
    this.props.loadNotesList();

    this.dispatchFilterUpdate = debounce(this.props.updateFilter, searchDelay);
  },

  onSearchItemClick ({ selected, id }) {
    // if note is already open then just focus it
    if (selected) {
      bus.publish('note:focus', id);
    } else {
      // else open and focus
      this.props.openNote(id).then(function () {
        bus.publish('note:focus', id);
      });
    }
  },

  render () {
    let { infos, searchFilter } = this.props;
    let matcher = fuzzySearch(lowerIfRequired(searchFilter));
    let results = infos.filter(
      info => matcher(lowerIfRequired(info.name))
    ).map(
      info => <SearchItem key={info.id} info={info} onClick={this.onSearchItemClick} />
    );
    return (
      <div className="SearchPanel">
        <div className="SearchPanel-header">
          <span className="search-type">{getSearchType(searchFilter)}</span>
          <span className="results-count">{results.size}</span>
          <Icon className="plus" type="plus" onClick={this.props.newNote} />
        </div>
        <SearchInput filter={searchFilter} onChange={this.dispatchFilterUpdate} />
        <ul className="SearchPanel-scroll">
          {results}
        </ul>
      </div>
    );
  },
});

export default connectReactComponent(SearchPanel, {
  store:   ['infos', 'searchFilter'],
  actions: ['loadNotesList', 'updateFilter', 'openNote', 'newNote'],
});
