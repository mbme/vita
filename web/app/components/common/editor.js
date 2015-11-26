import {createReactComponent} from 'viter/viter';

import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';

import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/display/placeholder';

export default createReactComponent({
  displayName: 'Editor',

  componentDidMount () {
    let codeMirror = CodeMirror.fromTextArea(this.refs.textarea, {
      lineNumbers: false,
      lineWrapping: true,
      mode: 'markdown'
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
    this.refs.editor.classList.toggle('is-focused', focused);
  },

  render () {
    let {defaultValue, placeholder = ''} = this.props;
    return (
      <div className="Editor" ref="editor">
        <textarea ref="textarea" placeholder={placeholder} defaultValue={defaultValue} autoComplete="off" />
      </div>
    )
  }
})
