import { createReactComponent } from 'viter/viter';
import Markdown from 'components/markdown';
import Category from 'components/category';

export default createReactComponent({
  displayName: 'Record',

  render () {
    let { name, categories, data, attachments } = this.props;
    return (
      <div className="Record">
        <h1 className="name">{name}</h1>
        <span className="categories">
          {categories.map(cat => <Category key={cat} name={cat} />)}
        </span>
        <Markdown text={data} attachments={attachments}/>
      </div>
    );
  }
});
