import {curry} from 'lodash';

import {baseUrl} from 'config';
import {createReactComponent} from 'viter/viter';

import Attachment from './attachment';
import FileUploader from './file-uploader';

let buildAttachmentUrl = curry(function (key, name) {
  return `${baseUrl}/notes/${key.type}/${key.id}/attachments/${name}`;
});

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
      attachments: attachments.add(file)
    });
  },

  onDelete () {
    console.error('delete attachment');
  }
})
