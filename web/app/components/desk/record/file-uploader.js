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
      fileName: ''
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
    let {file, fileName} = this.state;
    return (
        <div className="editor-view">
        <input ref="fileName" name="" type="text" defaultValue={fileName}/>
        <span>{file.type}</span>
        <span>{formatBytes(file.size)}</span>
        <span><Button label="Upload" type="primary" onClick={this.onClickUpload}/></span>
        <span><Button label="Cancel" type="warn" onClick={this.onClickCancelUpload}/></span>
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
      view: Views.upload
    });

    let {noteKey} = this.props;
    uploadFile(noteKey, fileName, file).then((resp) => {
      console.error(resp);
      this.props.onFileUploaded(resp);
      this.clearState();
    }).catch(function (err) {
      console.error('ERROR: ', err);
    });
  },

  onClickCancelUpload () {
    this.clearState();
  }
})
