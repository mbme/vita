import {curry} from 'lodash';

import {basePath} from 'config';
import {createReactComponent} from 'viter/viter';
import Attachment from './attachment';
import FileUploader from './file-uploader';

let buildAttachmentUrl = curry(function (key, name) {
  return `${basePath}/notes/${key.type}/${key.id}/attachments/${name}`;
});

export default createReactComponent({
  displayName: 'Attachments',

  render () {
    let {attachments, noteKey} = this.props;

    let buildUrl = buildAttachmentUrl(noteKey);

    return (
      <div className="Attachments">
        <FileUploader noteKey={noteKey}/>
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

  onDelete () {
    console.error('delete attachment');
  },

  onFileSelected (file) {
    console.error('select file', file.name);
  }
})
