import {createReactComponent} from 'viter/viter';
import {noop} from 'lodash';

export default createReactComponent(function Icon ({type, onClick = noop}) {
  let classes = `Icon icon ion-${type}`;
  return <i className={classes} onClick={onClick}></i>;
})
