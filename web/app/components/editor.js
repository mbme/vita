import {createReactComponent} from 'viter/viter';

import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';

export default createReactComponent({
  displayName: 'Editor',

  componentDidMount () {
    let codeMirror = CodeMirror.fromTextArea(this.refs.textarea, {
      lineNumbers: true
    });

    this.value = this.props.defaultValue || '';
    this.isFocused = codeMirror.hasFocus();

    codeMirror.on('change', this.onValueChange);

    codeMirror.on('focus', this.onFocusChange.bind(this, true));
    codeMirror.on('blur', this.onFocusChange.bind(this, false));
  },

  onValueChange (doc) {
    this.value = doc.getValue();
    if (this.props.onChange) {
      this.props.onChange(this.value);
    }
  },

  onFocusChange (focused) {
    this.isFocused = focused;
  },

  render () {
    return (
      <div className="Editor">
        <textarea ref="textarea" defaultValue={this.props.defaultValue} autoComplete="off" />
      </div>
    )
  }
})
