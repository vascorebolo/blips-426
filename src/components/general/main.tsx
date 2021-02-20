import * as React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Container from './container'
import { H1, P } from '../texts/texts'
import Button from '../ctas/button'
import Blips from '../../constants/blips'

const NumberShow = styled.p`
  display: block;
  font-size: 10vw;
  line-height: 105%;
  text-align: center;

  & + p {
    margin-top: 40px;
  }
`

const Main = () => {
  const [blips, setBlips] = useState(Blips)
  const [addedBlips, setAddedBlips] = useState([] as number[])
  const [blip, setBlip] = useState(0)

  useEffect(() => {}, [])

  const addBlip = () => {
    if (blips.length) {
      const index = Math.floor(Math.random() * blips.length)

      setAddedBlips([...addedBlips, blips[index]])
      blips.splice(index, 1)
      setBlips(blips)
    }
  }

  const revealBlip = () => {
    if (addedBlips.length) {
      const index = Math.floor(Math.random() * addedBlips.length)

      setBlips([...blips, addedBlips[index]])
      setBlip(addedBlips[index])
      addedBlips.splice(index, 1)
      setAddedBlips(addedBlips)
    }
  }

  return (
    <Container className="main" sizing="100%">
        <Container className="flex no-grow">
          <H1 align="center">BLIPS-426</H1>
        </Container>

        <Container className="inverted">
          <Container className="flex jcenter">
            <NumberShow>{ blips.length }</NumberShow>
            <P>blips pool</P>
          </Container>
          <Container className="flex jcenter">
            <NumberShow>{ addedBlips.length }</NumberShow>
            <P>blips added</P>
          </Container>
        </Container>

        <Container className="flex jcenter">
          { blip !== 0 && (
            <>
              <NumberShow>{ blip }</NumberShow>
              <P>last blip revealed</P>
            </>
          )}

          { blip === 0 && (
            <>
              <NumberShow>_</NumberShow>
              <P>no blips revealed</P>
            </>
          )}
        </Container>

        <Container className="no-border flex jend">
          <Button text="Add a Blip" callback={addBlip} disabled={blips.length === 0} />
          <Button text="Reveal a Blip" callback={revealBlip} disabled={addedBlips.length === 0} />
        </Container>
      </Container>
  )
}

export default Main