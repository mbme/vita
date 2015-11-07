import {createReactComponent} from 'viter/viter';
import {buildAttachmentUrl} from 'helpers/utils';

import MarkdownIt from 'markdown-it';

const markdownIt = new MarkdownIt('default', {
  html: true,
  linkify: true,
  typographer: true
});

function isAttachmentUrl(url) {
  return url && url.length > 2 && url[0] === '!' && url[url.length-1] === '!';
}

function preprocessUrl(url, noteKey, attachments) {
  if (!isAttachmentUrl(url)) {
    return url;
  }

  let addr = url.substring(1, url.length - 1);
  if (attachments.indexOf(addr) === -1) {
    return url;
  }

  return buildAttachmentUrl(noteKey, addr);
}

let defaultImageRender = markdownIt.renderer.rules.image;
markdownIt.renderer.rules.image = function (tokens, idx, options, env, self) {
  let token = tokens[idx];
  let src = token.attrs[token.attrIndex('src')];

  src[1] = preprocessUrl(src[1], env.noteKey, env.attachments);

  return defaultImageRender(tokens, idx, options, env, self);
};

export default createReactComponent(function Markdown ({noteKey, text, attachments}) {
  let data = markdownIt.render(text, {
    noteKey: noteKey,
    attachments: attachments.map(a => a.name).toJS()
  });
  return <div className="Markdown" dangerouslySetInnerHTML={{__html: data}}/>
});
