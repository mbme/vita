import { createReactComponent } from 'viter/viter';
import _ from 'lodash';

import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';

import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/display/placeholder';

import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/show-hint.css';

export default createReactComponent({
  displayName: 'Editor',

  componentDidMount () {
    let codeMirror = CodeMirror.fromTextArea(this.refs.textarea, {
      lineNumbers: false,
      lineWrapping: true,
      mode: 'markdown',
      extraKeys: {
        'Ctrl-Space': (editor) => {
          editor.showHint({
            hint: this.getCompletions,
            closeCharacters: /[\s()\[\]{};>,]/, // defaults without ":"
            completeSingle: false,
          });
        },
      },
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

  getCompletions (editor) {
    // { value, text, type }[]
    let { completions = [] } = this.props;
    if (!completions.length) {
      return;
    }

    let maxCompletionLength = _.max(completions.map(item => item.value.length));

    let cursor = editor.getCursor();
    let line = editor.getLine(cursor.line);

    let startCharPos = line.lastIndexOf('!', cursor.ch);

    let term = '';
    let from = cursor;
    let to = cursor;

    // check if there may be prefix for completion candidates
    if (startCharPos > -1 && startCharPos >= cursor.ch - maxCompletionLength) {
      term = line.substr(startCharPos, cursor.ch);
      from = new CodeMirror.Pos(cursor.line, startCharPos);
    }

    let list = [];
    completions.forEach(function ({ value, text }) {
      if (value.startsWith(term)) {
        list.push({
          text: value,
          displayText: text,
        });
      }
    });

    if (list.length) {
      return { list, from, to }; // eslint-disable-line consistent-return
    }
  },

  render () {
    let { defaultValue, placeholder = '' } = this.props;
    return (
      <div className="Editor" ref="editor">
        <textarea ref="textarea"
                  placeholder={placeholder}
                  defaultValue={defaultValue}
                  autoComplete="off" />
      </div>
    );
  },
});
