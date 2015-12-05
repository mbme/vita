### NOTE
* type: `Type` type of the note
* id: `uint` unique between notes of the same type
* timestamp: `uint` unix timestamp of last modification
* name: `string`
* categories: `Category[]`
* data: `string` note content
* attachments: `Attachment[]`

### Type
* name: `string` `:[a-z]` one of `:contact`, `:record`

### Category
* name: `string` `[0-9a-zA-Z]+`

### Attachment
* noteId: `Note.id` id of the note to which file is attached
* name: `string` unique between other attachments of this note
* data: `byte[]` file content
