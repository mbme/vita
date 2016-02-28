import { baseUrl } from 'config';
import { httpDelete, httpPost } from 'helpers/requests';


export default function () {
  return {
    deleteFile (key, name) {
      return httpDelete(`${baseUrl}/notes/${key.type}/${key.id}/attachments/${name}`);
    },

    uploadFile (key, name, file) {
      return httpPost(
        `${baseUrl}/notes/${key.type}/${key.id}/attachments`,
        { name, file }
      ).then(resp => JSON.parse(resp));
    },
  };
}
