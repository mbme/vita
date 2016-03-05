import { createReactComponent, PropTypes } from 'viter/viter';
import { formatBytes } from 'helpers/utils';

import Modal from 'components/modal';
import Button from 'components/button';

const imageMimeTypes = [
  'image/jpg', 'image/jpeg', 'image/png', 'image/gif', 'image/svg', 'image/webp',
];

function isImage (file) {
  return imageMimeTypes.indexOf(file.type) > -1;
}

const FileUploadModalView = createReactComponent({
  displayName: 'FileUploadModalView',

  propTypes: {
    uploadFile: PropTypes.func.isRequired,
    file:       PropTypes.object.isRequired,
    onClose:    PropTypes.func.isRequired,
  },

  getInitialState () {
    let file = this.props.file;
    let preview = isImage(file) ? window.URL.createObjectURL(file) : false;
    return {
      uploading: false,
      fileName: file.name,
      preview,
      errMsg: '',
    };
  },

  onClickUpload () {
    let fileName = this.refs.fileName.value;

    this.setState({ errMsg: '', uploading: true, fileName });

    this.props.uploadFile(fileName).then(
      this.props.onClose
    ).catch((err) => {
      console.error(err);
      let errMsg = `failed to upload file ${fileName}: ${err}`;
      this.setState({ errMsg, uploading: false });
    });
  },

  renderEditor () {
    let { fileName, preview, errMsg } = this.state;
    let { file } = this.props;

    let previewImg = false;
    if (preview) {
      previewImg = <img className="preview" alt={file.name} src={preview} />;
    }

    return (
      <div className="editor-view">
        {previewImg}
        <div className="input-row">
          <input ref="fileName" name="" type="text" defaultValue={fileName} />
          <span className="mime">{file.type}</span>
          <span className="size">{formatBytes(file.size)}</span>
        </div>
        <div className="error-message">{errMsg}</div>

        <Modal.Footer>
          <Button label="Cancel" type="warn" onClick={this.props.onClose} />
          <Button label="Upload" type="primary" onClick={this.onClickUpload} />
        </Modal.Footer>
      </div>
    );
  },

  renderUpload () {
    let { fileName } = this.state;
    let { file } = this.props;

    return (
      <div>
        {`UPLOADING FILE ${fileName} (${formatBytes(file.size)})`}
      </div>
    );
  },

  render () {
    let body = this.state.uploading ? this.renderUpload() : this.renderEditor();
    return (
      <Modal className="FileUploadModalView">
        <Modal.Header>
          <Modal.Title>File upload</Modal.Title>
        </Modal.Header>

        <Modal.Body>{body}</Modal.Body>
      </Modal>
    );
  },
});

export default function fileUploadModal (file, uploadFile, onClose) {
  return (
    <FileUploadModalView file={file}
                         uploadFile={uploadFile}
                         onClose={onClose} />
  );
}
