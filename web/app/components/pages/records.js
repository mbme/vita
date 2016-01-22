import { createReactComponent } from 'viter/viter';

import SearchPanel from 'components/search/panel';
import Desk from 'components/desk/desk';

export default createReactComponent(function MainPage () {
  return (
    <div className="MainPage">
      <div className="MainPage-left-panel"><SearchPanel /></div>
      <div className="MainPage-content"><Desk /></div>
    </div>
  );
});
