'use strict';

import session from 'base/session';

export default function (key, name) {
    return session.getServerAddress(`/notes/${key.type}/${key.id}/attachments/${name}`);
}
