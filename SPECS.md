# Note specs

### NOTE

* type: `Type` type of the note
* id: `uint` unique between notes of the same type
* timestamp: `uint` unix timestamp of last modification
* name: `string`
* categories: `Category[]`
* data: `string` note content
* attachments: `Attachment[]`

### Type

* name: `string` `:[a-z]+` one of `:contact`, `:record`

### Category

* name: `string` `[0-9a-zA-Z]+`

### Attachment

* noteId: `Note.id` id of the note to which file is attached
* name: `string` unique between other attachments of this note
* data: `byte[]` file content


# Websocket API

`/ws`: websocket connection

## Request

```javascript
{
    method, // string: one of accepted methods
    params, // optional method parameters
    id // some unique request id
}
```

## Response

```javascript
{
    result,
    error,
    id // request id
}
```

## Attachment

```javascript
{
    name, // string: file name
    timestamp, // uint: unix timestamp
    mime, // string: mime type of the file
    size, // uint: file size
    type // string: one of file types: "video", "audio", "document", "image", "binary"
}
```

## NoteInfo

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

## Note

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

## Read notes list

### Request

* method: `notes-list-read`

* params: `null`

### Response

* result: `NoteInfo[]`

### Error Response

No errors

## Read note

## Create note

## Update note

## Delete note


# HTTP API

## Add attachment

## Read attachment

## Remove attachment
