import {createReactComponent} from 'viter/viter';
import {curry} from 'lodash';
import moment from 'moment';
import {formatBytes} from 'helpers/utils';
import Icon from 'components/common/icon';
import {basePath} from 'config';

const FileTypeIcons = {
  'image':    'image',
  'document': 'document-text',
  'video':    'social-youtube-outline',
  'audio':    'headphone',
  'binary':   'document'
};

function getFileIcon(type) {
  let icon =  FileTypeIcons[type];
  return (<Icon type={icon}/>);
}

let getFileAddr = curry(function (key, name) {
  return `${basePath}/notes/${key.type}/${key.id}/attachments/${name}`;
});

function formatTime(ts) {
  return moment.unix(ts).format("DD.MM.YYYY HH:mm");
}

export default createReactComponent({
  displayName: 'Attachments',

  render () {
    let {attachments, noteKey} = this.props;

    let addr = getFileAddr(noteKey);

    let elements = attachments.map(({name, mime, type, size, timestamp}) => {
      return (
        <tr key={name}>
          <td className="attachment-type-icon" title={mime}>{getFileIcon(type)}</td>
          <td className="name">{<a href={addr(name)}>{name}</a>}</td>
          <td className="size">{formatBytes(size)}</td>
          <td className="ts">{formatTime(timestamp)}</td>
          <td className="buttons"><Icon type="trash-b" onClick={this.onDelete}/></td>
        </tr>
      );
    });

    return (
      <table className="Attachments">
        <tbody>{elements}</tbody>
      </table>
    );
  },

  onDelete () {
    console.error('delete attachment');
  }
})
