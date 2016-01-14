import {createReactComponent} from 'viter/viter';
import Markdown from 'components/common/markdown';
import Category from 'components/common/category';

export default createReactComponent(function Record({name, categories, data, attachments}) {
  return (
    <div className="Record">
      <h1 className="name">{name}</h1>
      <span className="categories">
        {categories.map(cat => <Category key={cat} name={cat} />)}
      </span>
      <Markdown text={data} attachments={attachments}/>
    </div>
  )
});
