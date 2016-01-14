import {createReactComponent} from 'viter/viter';

import MarkdownIt from 'markdown-it';

const markdownIt = new MarkdownIt('default', {
  html: true,
  linkify: true,
  typographer: true
});

function isAttachmentUrl(url) {
  return url && url.length > 2 && url[0] === '!' && url[url.length-1] === '!';
}

function preprocessUrl(url, attachments) {
  if (!isAttachmentUrl(url)) {
    return url;
  }

  let addr = url.substring(1, url.length - 1);
  let attachment = attachments.find(attachment => attachment.name === addr);
  if (attachment) {
    return attachment.url;
  } else {
    return url;
  }
}

let defaultImageRender = markdownIt.renderer.rules.image;
markdownIt.renderer.rules.image = function (tokens, idx, options, env, self) {
  let token = tokens[idx];
  let src = token.attrs[token.attrIndex('src')];

  src[1] = preprocessUrl(src[1], env.attachments);

  return defaultImageRender(tokens, idx, options, env, self);
};

// Remember old link renderer, if overriden, or proxy to default renderer
let defaultLinkRender = markdownIt.renderer.rules.link_open || function(tokens, idx, options, env, self) {
  return self.renderToken(tokens, idx, options);
};

markdownIt.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  let token = tokens[idx];
  let href = token.attrs[token.attrIndex('href')];

  href[1] = preprocessUrl(href[1], env.attachments);

  return defaultLinkRender(tokens, idx, options, env, self);
};

export default createReactComponent(function Markdown ({text, attachments}) {
  let data = markdownIt.render(text, {attachments});
  return <div className="Markdown" dangerouslySetInnerHTML={{__html: data}}/>
});
