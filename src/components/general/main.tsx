import * as React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Container from './container'
import { H1 } from '../texts/header'
import Button from '../ctas/button'
import Blips from '../../constants/blips'

const NumberShow = styled.p`
  display: block;
  font-size: 14vw;
  text-align: center;
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
    <Container className="main">
        <Container sizing="10%">
          <H1 align="center">▮ BLIPS-426 ▮</H1>
        </Container>
        <Container className="inverted">
          <Container>
            <NumberShow>{ blips.length }</NumberShow>
            <p>blips in stock</p>
          </Container>
          <Container>
            <NumberShow>{ addedBlips.length }</NumberShow>
            <p>blips added</p>
          </Container>
        </Container>
        <Container>
          { blip !== 0 && (
            <>
              <NumberShow>{ blip }</NumberShow>
              <p>Last revealed blip.</p>
            </>
          )}

          { blip === 0 && (
            <>
              <NumberShow>-</NumberShow>
              <p>no blips revealed</p>
            </>
          )}
        </Container>
        <Container>
          <Button text="Add Blip" callback={addBlip} />
          <Button text="Reveal Blip" callback={revealBlip} />
        </Container>
      </Container>
  )
}

export default Main