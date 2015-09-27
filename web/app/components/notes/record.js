import {createReactComponent} from 'viter/viter';
import Markdown from 'components/markdown';

export default createReactComponent(function Record({note}) {
  return (
    <div className="Record">
      <h1 className="title">{note.name}</h1>
      <h4 className="categories">{note.categories.join(', ')}</h4>
      <Markdown text={note.data}/>
    </div>
  )
});
