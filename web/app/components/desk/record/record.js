import {createReactComponent} from 'viter/viter';
import Markdown from 'components/common/markdown';
import Category from 'components/common/category';

export default createReactComponent(function Record({note}) {
  let {key, name, categories, data, attachments} = note;
  return (
    <div className="Record">
      <h1 className="name">{name}</h1>
      <span className="categories">
        {categories.map(cat => <Category key={cat} name={cat} />)}
      </span>
      <Markdown noteKey={key} text={data} attachments={attachments}/>
    </div>
  )
});
