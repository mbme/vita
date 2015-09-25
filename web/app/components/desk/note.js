import {createReactComponent} from 'viter/viter';
import MarkdownIt from 'markdown-it';

const markdownIt = new MarkdownIt('default', {
  html: true,
  linkify: true,
  typographer: true
});

export default createReactComponent({
  displayName: 'Note',

  render () {
    let {note} = this.props;

    return (
      <li className="Note">
        <h1 className="title">{note.name}</h1>
        <h4 className="categories">{note.categories.join(', ')}</h4>
        <div className="body" dangerouslySetInnerHTML={{__html: markdownIt.render(note.data)}} />
      </li>
    )
  }
})
