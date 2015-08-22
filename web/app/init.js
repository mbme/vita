import './styles/main.scss';

import React from 'react';

class Component extends React.Component {
  constructor (props) {
    super(props);
  }
}

class Test extends Component {
  componentWillMount () {
    console.log('TEST!')
  }

  render () {
    return (<h1>HERE!</h1>)
  }
}

React.render(<Test />, document.getElementById('content'));
