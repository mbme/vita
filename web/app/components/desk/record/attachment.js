import moment from 'moment';

import {createReactComponent} from 'viter/viter';
import {formatBytes} from 'helpers/utils';
import {createConfirmationDialog} from 'helpers/dialogs';

import Icon from 'components/common/icon';

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

function formatTime(ts) {
  return moment.unix(ts).format("DD.MM.YYYY HH:mm");
}

function showDeleteConfirmation (name) {
  return createConfirmationDialog({
    type: 'warn',
    title: 'Delete file',
    body: `Are you sure you would like to delete file <b>${name}</b>?`,
    confirmationButton: 'Delete'
  });
}

export default createReactComponent({
  displayName: 'Attachment',

  render () {
    let {attachment, buildAddress} = this.props;
    let {name, mime, type, size, timestamp} = attachment;

    return (
      <tr>
        <td className="attachment-type-icon" title={mime}>{getFileIcon(type)}</td>
        <td className="name">{<a href={buildAddress(name)}>{name}</a>}</td>
        <td className="size">{formatBytes(size)}</td>
        <td className="ts">{formatTime(timestamp)}</td>
        <td className="buttons"><Icon type="trash-b" onClick={this.onDelete}/></td>
      </tr>
    );
  },

  onDelete () {
    showDeleteConfirmation(this.props.attachment.name).then(this.props.onDelete);
  }
})
