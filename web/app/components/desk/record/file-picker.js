import {createReactComponent} from 'viter/viter';

import Icon from 'components/common/icon';

export default createReactComponent({
  displayName: 'FilePicker',

  render () {
    return (
      <form className="FilePicker" ref="form" action="" onDrop={this.onDrop}>
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
      this.props.onFileSelected(files[0]);
    }
  },

  onFileSelected (e) {
    this.props.onFileSelected(e.target.files[0]);
    this.refs.form.reset()
  }
})
