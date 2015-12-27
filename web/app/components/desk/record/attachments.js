import {createReactComponent} from 'viter/viter';
import {buildAttachmentUrl} from 'helpers/utils';

import Attachment from './attachment';

export default createReactComponent({
  displayName: 'Attachments',

  render () {
    let {noteKey, attachments, deleteAttachment} = this.props;

    let items = attachments.map(
      function (attachment) {
        return (
          <Attachment key={attachment.name}
                      attachment={attachment}
                      address={buildAttachmentUrl(noteKey, attachment.name)}
                      onDelete={deleteAttachment}/>
        )
      });

    return (
      <div className="Attachments">
        <table>
          <tbody>{items}</tbody>
        </table>
      </div>
    );
  }
})
