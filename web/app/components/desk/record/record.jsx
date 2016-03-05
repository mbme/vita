import { createReactComponent, PropTypes } from 'viter/viter';
import Markdown from 'components/markdown';
import Category from 'components/category';

export default createReactComponent({
  displayName: 'Record',

  propTypes: {
    name:        PropTypes.string,
    data:        PropTypes.string,
    categories:  PropTypes.arrayOf(PropTypes.string).isRequired,
    attachments: PropTypes.arrayOf(PropTypes.object).isRequired,
  },

  render () {
    let { name, categories, data, attachments } = this.props;
    return (
      <div className="Record">
        <h1 className="name">{name}</h1>
        <span className="categories">
          {categories.map(cat => <Category key={cat} name={cat} />)}
        </span>
        <Markdown text={data} attachments={attachments} />
      </div>
    );
  },
});
