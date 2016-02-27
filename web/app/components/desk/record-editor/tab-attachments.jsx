import { createReactContainer } from 'viter/viter';
import { createConfirmationModal } from 'components/modal';
import { createDeferred } from 'helpers/utils';

import Attachments from 'components/desk/record-editor/attachments';
import FilePicker from 'components/desk/record-editor/file-picker';
import fileUploadModal from 'components/desk/record-editor/file-upload-modal';

function deleteConfirmation (fileName, deferred) {
  return createConfirmationModal({
    type: 'warn',
    title: 'Delete file',
    body: (<span>Are you sure you would like to delete file <b>{fileName}</b>?</span>),
    confirmationButton: 'Delete',
    onSuccess: deferred.resolve,
    onCancel: deferred.reject
  });
}

export default createReactContainer({
  displayName: 'AttachmentsTab',

  getInitialState () {
    return {
      modal: null
    };
  },

  hideModal () {
    this.setState({ modal: null });
  },

  uploadFile (file) {
    let modal = fileUploadModal(
      file,
      fileName => this.actions.attachFile(this.props.note.nId, fileName, file),
      this.hideModal
    );

    this.setState({ modal });
  },

  deleteAttachment ({ name }) {
    let deferred = createDeferred();

    this.setState({
      modal: deleteConfirmation(name, deferred)
    });

    deferred.promise.then(
      () => this.actions.deleteFile(this.props.note.nId, name)
    ).then(
      this.hideModal,
      this.hideModal // hide modal in any case
    );

    return deferred.promise;
  },

  render () {
    let { attachments } = this.props.note;

    return (
      <div>
        <FilePicker onFileSelected={this.uploadFile}/>
        <Attachments attachments={attachments}
                     deleteAttachment={this.deleteAttachment}/>
        {this.state.modal}
      </div>
    );
  }
});
