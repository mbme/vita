import {createReactComponent} from 'viter/viter';
import SearchItem from './item';

export default createReactComponent(function SearchItems({results, selectedIds}) {
  return (
    <ul className="SearchItems">
      {results.map(info => <SearchItem key={info.id} note={info} selected={selectedIds.indexOf(info.id) > -1}/>)}
    </ul>
  )
})
