import {createReactComponent} from 'viter/viter';

import MarkdownIt from 'markdown-it';

const markdownIt = new MarkdownIt('default', {
  html: true,
  linkify: true,
  typographer: true
});

export default createReactComponent(function Markdown ({text=""}) {
  let data = markdownIt.render(text);
  return <div className="Markdown" dangerouslySetInnerHTML={{__html: data}}/>
});
