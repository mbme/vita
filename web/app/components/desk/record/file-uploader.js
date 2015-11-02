import {createReactComponent} from 'viter/viter';
import {formatBytes} from 'helpers/utils';
import {POST} from 'helpers/requests';
import {baseUrl} from 'config';

import Icon from 'components/common/icon';
import Button from 'components/common/button';

const Views = {
  picker: 'picker',
  editor: 'editor',
  upload: 'upload',
  error:  'error'
}

function uploadFile(noteKey, name, file) {
  return POST(`${baseUrl}/notes/${noteKey.type}/${noteKey.id}/attachments`, {
    name, file
  });
}

export default createReactComponent({
  displayName: 'FileUploader',

  getInitialState () {
    return {
      view: Views.picker,
      file: null,
      fileName: '',
      errMsg: ''
    }
  },

  clearState () {
    this.setState(this.getInitialState());
  },

  renderPicker () {
    return (
      <form className="picker-view" ref="form" action="" onDrop={this.onDrop}>
        <Icon type="upload" />
        <span> Drop files here or </span>
        <span className="upload-link" onClick={this.onClickSelectFile}>select them</span>
        <input ref="input" name="" type="file" value="" onChange={this.onFileSelected}/>
      </form>
    )
  },

  renderEditor () {
    let {file, fileName, errMsg} = this.state;

    let err = false;
    if (errMsg) {
      err = <div className="error-message">{errMsg}</div>;
    }
    return (
      <div className="editor-view">
        <div className="row1">
          <input ref="fileName" name="" type="text" defaultValue={fileName}/>
          <span>{file.type}</span>
          <span>{formatBytes(file.size)}</span>
        </div>
        {err}
        <div className="row2">
          <Button label="Cancel" type="warn" onClick={this.onClickCancelUpload}/>
          <Button label="Upload" type="primary" onClick={this.onClickUpload}/>
        </div>
      </div>
    )
  },

  renderUpload () {
    let {file, fileName} = this.state;
    return (
      <div className="upload-view">
        UPLOADING FILE {fileName} ({formatBytes(file.size)})
      </div>
    )
  },

  render () {
    let body;
    switch (this.state.view) {
      case Views.picker:
        body = this.renderPicker();
        break;
      case Views.editor:
        body = this.renderEditor();
        break;
      case Views.upload:
        body = this.renderUpload();
        break;
      default:
        throw new Error(`unexpected view ${this.state.view}`);
    }

    return (
      <div className="FileUploader">
        {body}
      </div>
    )
  },

  onClickSelectFile () {
    this.refs.input.click();
  },

  onDrop (e) {
    let files = e.dataTransfer.files;
    if (files.length) {
      this.selectFile(files[0]);
    }
  },

  onFileSelected (e) {
    this.selectFile(e.target.files[0]);
    this.refs.form.reset()
  },

  selectFile (file) {
    this.setState({
      file: file,
      fileName: file.name,
      view: Views.editor
    })
  },

  onClickUpload () {
    let {file} = this.state;
    let fileName = this.refs.fileName.value;
    this.setState({
      fileName,
      errMsg: '',
      view: Views.upload
    });

    let {noteKey} = this.props;
    uploadFile(noteKey, fileName, file).then((resp) => {
      this.props.onFileUploaded(resp);
      this.clearState();
    }).catch((err) => {
      console.error(`failed to upload file ${fileName}:`, err);
      this.setState({
        view: Views.editor,
        errMsg: `failed to upload file ${fileName}`
      })
    });
  },

  onClickCancelUpload () {
    this.clearState();
  }
})
