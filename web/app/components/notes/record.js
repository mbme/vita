import {createReactComponent} from 'viter/viter';
import Markdown from 'components/markdown';

export default createReactComponent(function Record({name, data, categories=[]}) {
  return (
    <div className="Record">
      <h1 className="name">{name}</h1>
      <h4 className="categories">{categories.join(', ')}</h4>
      <Markdown text={data}/>
    </div>
  )
});
