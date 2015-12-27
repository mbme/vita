import {createReactComponent} from 'viter/viter';
import {formatBytes, formatFileTs} from 'helpers/utils';
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

function showDeleteConfirmation (name) {
  return createConfirmationDialog({
    type: 'warn',
    title: 'Delete file',
    body: (<span>Are you sure you would like to delete file <b>{name}</b>?</span>),
    confirmationButton: 'Delete'
  });
}

export default createReactComponent({
  displayName: 'Attachment',

  render () {
    let {attachment, address} = this.props;
    let {name, mime, type, fileSize, timestamp} = attachment;

    return (
      <tr>
        <td className="attachment-type-icon" title={mime}>{getFileIcon(type)}</td>
        <td className="name">{<a href={address} target="_blank">{name}</a>}</td>
        <td className="size">{formatBytes(fileSize)}</td>
        <td className="ts">{formatFileTs(timestamp)}</td>
        <td className="buttons"><Icon type="trash-b" onClick={this.onDelete}/></td>
      </tr>
    );
  },

  onDelete () {
    let attachment = this.props.attachment;
    showDeleteConfirmation(attachment.name).then(() => this.props.onDelete(attachment));
  }
})
