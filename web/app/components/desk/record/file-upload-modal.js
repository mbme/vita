import {createReactComponent} from 'viter/viter';
import {formatBytes} from 'helpers/utils';
import {createModal, buildHeader, buildButtons, buildBody} from 'helpers/dialogs';

import Button from 'components/common/button';

const header = buildHeader("File upload");

const imageMimeTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif', 'image/svg', 'image/webp'];

function isImage(file) {
  return imageMimeTypes.indexOf(file.type) > -1;
}

const FileUploadModalView = createReactComponent({
  displayName: 'FileUploadModalView',

  getInitialState () {
    let file = this.props.file;
    let preview = isImage(file) ? window.URL.createObjectURL(file) : false;
    return {
      uploading: false,
      fileName: file.name,
      preview,
      errMsg: '',
    }
  },

  renderEditor () {
    let {fileName, preview, errMsg} = this.state;
    let {file} = this.props;

    let previewImg = false;
    if (preview) {
      previewImg = <img className="preview" alt={file.name} src={preview}/>;
    }

    let body = buildBody([
      previewImg,
      <div className="input-row">
        <input ref="fileName" name="" type="text" defaultValue={fileName}/>
        <span className="mime">{file.type}</span>
        <span className="size">{formatBytes(file.size)}</span>
      </div>,
      <div className="error-message">{errMsg}</div>
    ], 'editor-view');

    let buttons = buildButtons([
      <Button label="Cancel" type="warn" onClick={this.close}/>,
      <Button label="Upload" type="primary" onClick={this.onClickUpload}/>
    ]);

    return {body, buttons};
  },

  renderUpload () {
    let {fileName} = this.state;
    let {file} = this.props;

    let body = buildBody([
      `UPLOADING FILE ${fileName} (${formatBytes(file.size)})`
    ], 'upload-view');

    return {body, buttons: false};
  },

  render () {
    let {body, buttons} = this.state.uploading ? this.renderUpload() : this.renderEditor();
    return (
      <div className="FileUploadModalView">
        {header}
        {body}
        {buttons}
      </div>
    );
  },

  onClickUpload () {
    let fileName = this.refs.fileName.value;

    this.setState({errMsg: '', uploading: true, fileName});

    this.props.uploadFile(fileName).then(() => {
      this.close();
    }).catch((err) => {
      let errMsg = `failed to upload file ${fileName}: ${err}`;
      this.setState({errMsg, uploading: false})
    });
  },

  close () {
    this.props.close();
  }
});

export default function showFileUploadModal (file, uploadFile) {
  let modal = createModal();
  modal.open(<FileUploadModalView file={file}
                                  uploadFile={uploadFile}
                                  close={modal.close}/>);
}
