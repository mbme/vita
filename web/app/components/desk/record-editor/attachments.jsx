import { createReactComponent, PropTypes } from 'viter/viter';
import { partial } from 'lodash';

import Attachment from './attachment';

export default createReactComponent({
  displayName: 'Attachments',

  propTypes: {
    attachments: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete:    PropTypes.func.isRequired,
  },

  render () {
    let { attachments, onDelete } = this.props;

    let items = attachments.map(
      function (attachment) {
        return (
          <Attachment key={attachment.name}
                      attachment={attachment}
                      onDelete={partial(onDelete, attachment)} />
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
