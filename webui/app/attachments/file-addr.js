'use strict';

import session from 'base/session';

export default function (id, name) {
    return session.getServerAddress(`/notes/${id}/attachments/${name}`);
}
