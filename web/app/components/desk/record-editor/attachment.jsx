import { createReactComponent } from 'viter/viter';
import { formatBytes, formatFileTs } from 'helpers/utils';

import Icon from 'components/icon';

const FILE_TYPE_ICONS = {
  image:    'image',
  document: 'document-text',
  video:    'social-youtube-outline',
  audio:    'headphone',
  binary:   'document',
};

function getFileIcon (type) {
  let icon = FILE_TYPE_ICONS[type];
  return (<Icon type={icon} />);
}

export default createReactComponent({
  displayName: 'Attachment',

  render () {
    let { name, mime, type, size, timestamp, url } = this.props.attachment;

    return (
      <tr>
        <td className="attachment-type-icon" title={mime}>{getFileIcon(type)}</td>
        <td className="name">{<a href={url} target="_blank">{name}</a>}</td>
        <td className="size">{formatBytes(size)}</td>
        <td className="ts">{formatFileTs(timestamp)}</td>
        <td className="buttons"><Icon type="trash-b" onClick={this.props.onDelete} /></td>
      </tr>
    );
  },
});
