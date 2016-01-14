import {baseUrl} from 'config';
import {DELETE, POST} from 'helpers/requests';

export function deleteFile(key, name) {
  return DELETE(`${baseUrl}/notes/${key.type}/${key.id}/attachments/${name}`);
}

export function uploadFile(key, name, file) {
  return POST(
    `${baseUrl}/notes/${key.type}/${key.id}/attachments`,
    {name, file}
  );
}
