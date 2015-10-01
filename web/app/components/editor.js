import {createReactComponent} from 'viter/viter';

import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';

export default createReactComponent({
  displayName: 'Editor',

  componentDidMount () {
    this.value = this.props.defaultValue || '';

    let codeMirror = CodeMirror.fromTextArea(this.refs.textarea, {
      lineNumbers: true
    });
    codeMirror.on('change', this.onValueChange);
  },

  onValueChange (doc) {
    this.value = doc.getValue();
    if (this.props.onChange) {
      this.props.onChange(this.value);
    }
  },

  render () {
    return (
      <div className="Editor">
        <textarea ref="textarea" defaultValue={this.props.defaultValue} autoComplete="off" />
      </div>
    )
  }
})
