import {createReactComponent} from 'viter/viter';
import {POST} from 'helpers/requests';
import {baseUrl} from 'config';
import showFileUploadModal from './file-upload-modal';

import Icon from 'components/common/icon';

function uploadFile(noteKey, name, file) {
  return POST(`${baseUrl}/notes/${noteKey.type}/${noteKey.id}/attachments`, {
    name, file
  });
}

export default createReactComponent({
  displayName: 'FileUploader',

  render () {
    return (
      <form className="FileUploader" ref="form" action="" onDrop={this.onDrop}>
        <Icon type="upload" />
        <span> Drop files here or </span>
        <span className="upload-link" onClick={this.onClickSelectFile}>select them</span>
        <input ref="input" name="" type="file" value="" onChange={this.onFileSelected}/>
      </form>
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
    let {noteKey, onFileUploaded} = this.props;
    showFileUploadModal(file, function (fileName) {
      return uploadFile(noteKey, fileName, file).then(function (result) {
        onFileUploaded(result);
        return result;
      }, function (err) {
        console.error('failed to upload file %s: %s', fileName, err);
        throw err;
      })
    });
  }
})
