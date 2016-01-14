import {createReactComponent} from 'viter/viter';

import Attachment from './attachment';

export default createReactComponent({
  displayName: 'Attachments',

  render () {
    let {attachments, deleteAttachment} = this.props;

    let items = attachments.map(
      function (attachment) {
        return (
          <Attachment key={attachment.name}
                      attachment={attachment}
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
