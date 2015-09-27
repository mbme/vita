import {createReactComponent} from 'viter/viter';
import {noop} from 'lodash';

export default createReactComponent(function Icon ({type, onClick = noop, className = ""}) {
  let classes = `Icon icon ion-${type} ${className}`;
  return <i className={classes} onClick={onClick}></i>;
})
