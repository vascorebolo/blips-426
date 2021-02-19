import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import Main from './components/general/main'

class App extends React.Component {
  render() {
    return (
      <Main />
    );
  }
}

export default hot(App);
