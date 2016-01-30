Note specs
==================

* NOTE
    * type: `Type` type of the note
    * id: `uint` unique between notes of the same type
    * timestamp: `uint` unix timestamp of last modification
    * name: `string`
    * categories: `Category[]`
    * data: `string` note content
    * attachments: `Attachment[]`

* Type
    * name: `string` `:[a-z]+` one of `:contact`, `:record`

* Category
    * name: `string` `[0-9a-zA-Z]+`

* Attachment
  * noteId: `Note.id` id of the note to which file is attached
  * name: `string` unique between other attachments of this note
  * data: `byte[]` file content


Server API
==================

* `Request`

    ```javascript
    {
        method, // string: one of accepted methods
        params, // optional method parameters
        id // some unique request id
    }
    ```

* `Response`

    ```javascript
    {
        result,
        error: undefined,
        id // request id
    }
    ```

* `ErrorResponse`

    ```javascript
    {
        result: undefined,
        error, // string
        id // request id
    }
    ```

* `Attachment`

    ```javascript
    {
        name, // string: file name
        timestamp, // uint: unix timestamp
        mime, // string: mime type of the file
        size, // uint: file size
        type // string: one of file types: "video", "audio", "document", "image", "binary"
    }
    ```

* `NoteInfo`

    ```javascript
    {
        key: {
            type, // string: note type
            id // uint: unique note id
        },
        name, // string: note name
        categories, // string[]: note categories
        attachments, // Attachment[]: note attachaments
        timestamp // uint: unix timestamp of last modification
    }
    ```

* `Note`

    ```javascript
    {
        key: {
            type, // string: note type
            id // uint: unique note id
        },
        name, // string: note name
        categories, // string[]: note categories
        attachments, // Attachment[]: note attachaments
        timestamp, // uint: unix timestamp of last modification
        data // string: note content
    }
    ```

Websocket
--------------------

`/ws`: websocket connection

Communication happens in form of request-response.

Client sends `Request` object with unique `id` field and receives `Response` or `ErrorResponse` with the same `id`.

### Read notes list

* Request:

    * `method`: `"notes-list-read"`

    * `params`: `null`

* Response:

    `result`: `NoteInfo[]` info about all available notes


### Read note

* Request

    * `method`: `"note-read"`

    * `params`:

    ```javascript
    {
        type, // string: note type
        id // uint: unique note id
    }
    ```

* Response

    `result`: `Note` requested note


### Create note

* Request

    * `method`: `"note-create"`

    * `params`:

    ```javascript
    {
        type, // string: note type
        name, // string: note name
        data, // string: note content
        categories // string[]: note categories
    }
    ```

* Response

    `result`: `Note` created note


### Update note

* Request

    * `method`: `"note-update"`

    * `params`:

    ```javascript
    {
        key: {
            type, // string: note type
            id // uint: unique note id
        },
        name, // string: optional, new note name
        data, // string: optional, new note content
        categories // string[]: optional, new note categories
    }
    ```

* Response

    `result`: `Note` updated note


### Delete note

* Request

    * `method`: `"note-delete"`

    * `params`:

    ```javascript
    {
        type, // string: note type
        id // uint: unique note id
    }
    ```

* Response

    `result`: key of deleted note

    ```javascript
    {
        type, // string: note type
        id // uint: unique note id
    }
    ```


HTTP
------------------

All requests always return status `200` if everything is ok and `400` otherwise.

In case of error response body contains error message.

### Add attachment

* Request

    `POST /notes/$type/$id/attachments` with MIME type `multipart/form-data`

    * `$type: string` note type

    * `$id: uint` unique note id

    Form fields:

    * `name` must contain file name

    * `file` must contain file data

* Response

    `Attachment` attachment description

### Read attachment

* Request

    `GET /notes/$type/$id/attachments/$fileId`

    * `$type: string` note type

    * `$id: uint` unique note id

    * `$fileId: string` attachment name unique between other attachments of this note

* Response

    File content

### Remove attachment

* Request

    `DELETE /notes/$type/$id/attachments/$fileId`

    * `$type: string` note type

    * `$id: uint` unique note id

    * `$fileId: string` attachment name unique between other attachments of this note

* Response

    `null`
