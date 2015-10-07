import {createReactComponent} from 'viter/viter';
import Icon from 'components/icon';

export default createReactComponent(function Modal ({config}) {
  let {body, buttons, title, onCancel} = config;

  return (
    <div className="Modal">
      <Icon type="close-round" className="Exit" onClick={onCancel} />
      <div className="Modal-header">
        {title}
      </div>
      <div className="Modal-body">
        {body}
      </div>
      <div className="Modal-buttons">
        {buttons}
      </div>
    </div>
  )
});
