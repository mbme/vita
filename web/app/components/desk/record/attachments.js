import {curry} from 'lodash';

import {basePath} from 'config';
import {createReactComponent} from 'viter/viter';
import Attachment from './attachment';

let getFileAddr = curry(function (key, name) {
  return `${basePath}/notes/${key.type}/${key.id}/attachments/${name}`;
});

export default createReactComponent({
  displayName: 'Attachments',

  render () {
    let {attachments, noteKey} = this.props;

    let addr = getFileAddr(noteKey);

    return (
      <table className="Attachments">
        <tbody>
          {attachments.map(attachment =>
            <Attachment key={attachment.name}
                        attachment={attachment}
                        buildAddress={addr}
                        onDelete={this.onDelete}/>)}
        </tbody>
      </table>
    );
  },

  onDelete () {
    console.error('delete attachment');
  }
})
