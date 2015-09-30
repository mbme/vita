import {createReactComponent} from 'viter/viter';
import ReactDOM from 'react-dom';

import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';

export default createReactComponent({
  displayName: 'Editor',

  componentDidMount () {
    let el = ReactDOM.findDOMNode(this.refs.textarea);
    let codeMirror = CodeMirror.fromTextArea(el, {
      lineNumbers: true
    });
    codeMirror.on('change', this.onValueChange);
  },

  onValueChange (doc) {
    if (this.props.onChange) {
      this.props.onChange(doc.getValue());
    }
  },

  render () {
    return (
      <div className="Editor">
        <textarea ref="textarea" defaultValue={this.props.value} autoComplete="off" />
      </div>
    )
  }
})
