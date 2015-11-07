import {baseUrl} from 'config';
import {createReactComponent} from 'viter/viter';
import {DELETE} from 'helpers/requests';
import {createAttachment} from 'stores/entities';
import {buildAttachmentUrl} from 'helpers/utils';

import Attachment from './attachment';
import FileUploader from './file-uploader';

function deleteFile(key, name) {
  return DELETE(`${baseUrl}/notes/${key.type}/${key.id}/attachments/${name}`);
}

export default createReactComponent({
  displayName: 'Attachments',

  getInitialState () {
    return {
      attachments: this.props.attachments
    }
  },

  render () {
    let noteKey = this.props.noteKey;

    let attachments = this.state.attachments;

    let buildUrl = buildAttachmentUrl(noteKey);

    return (
      <div className="Attachments">
        <FileUploader noteKey={noteKey} onFileUploaded={this.onFileUploaded}/>
        <table>
          <tbody>
            {attachments.map(attachment =>
              <Attachment key={attachment.name}
                          attachment={attachment}
                          buildAddress={buildUrl}
                          onDelete={this.onDelete}/>)}
          </tbody>
        </table>
      </div>
    );
  },

  onFileUploaded (file) {
    let attachments = this.state.attachments;
    this.setState({
      attachments: attachments.add(createAttachment(file))
    });
  },

  onDelete (attachment) {
    let attachments = this.state.attachments;
    let noteKey = this.props.noteKey;
    deleteFile(noteKey, attachment.name).then(() => {
      this.setState({
        attachments: attachments.delete(attachment)
      })
    }, (e) => console.error('cannot delete file %s:', attachment.name, e));
  }
})
