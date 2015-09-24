import {createReactComponent} from 'viter/viter';
import SearchItem from './item';

export default createReactComponent({
  displayName: 'SearchItems',

  render () {
    let {results} = this.props;

    return (
      <ul className="SearchItems">
        {results.map(info => <SearchItem key={info.id} note={info}/>)}
      </ul>
    )
  }
})
