
import * as React from 'react'
import { hot } from 'react-hot-loader/root'

import Container from './components/general/container'
import Blip from './components/general/blip'
import { H1 } from './components/texts/header';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Container sizing="10%">
          <H1 align="center">▮ BLIPS-426 ▮</H1>
        </Container>
        <Container>
          <Blip />
        </Container>
        <Container>
          <p>╬</p>

        </Container>
      </Container>
    );
  }
}

export default hot(App);
