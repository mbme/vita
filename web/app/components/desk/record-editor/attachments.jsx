import { createReactComponent } from 'viter/viter';
import { partial } from 'lodash';

import Attachment from './attachment';

export default createReactComponent({
  displayName: 'Attachments',

  render () {
    let { attachments, deleteAttachment } = this.props;

    let items = attachments.map(
      function (attachment) {
        return (
          <Attachment key={attachment.name}
                      attachment={attachment}
                      onDelete={partial(deleteAttachment, attachment)} />
        );
      });

    return (
      <div className="Attachments">
        <table>
          <tbody>{items}</tbody>
        </table>
      </div>
    );
  },
});
