import {createReactContainer} from 'viter/viter';
import {fuzzySearch} from 'helpers/utils';

import SearchItems from './items';
import SearchInput from './input';

export default createReactContainer({
  displayName: 'SearchPanel',

  stores:  ['notes-info', 'app'],

  getState (NotesInfoStore, AppStore) {
    return {
      infos: NotesInfoStore.infos,
      filter: AppStore.searchFilter
    };
  },

  render () {
    let {infos, filter} = this.state;
    let results = infos.filter(i => fuzzySearch(filter, i.name));
    return (
      <ul className="SearchPanel">
        <SearchInput filter={filter} />
        <SearchItems results={results} />
      </ul>
    )
  }
})
