import * as React from 'react'
import { useEffect, useState } from 'react'

import Logo from './logo'
import Container from './container'
import ButtonsContainer from './buttons.container'
import { H1, P } from '../texts/texts'
import Button from '../ctas/button'
import Blips from '../../constants/blips'
import NumberShow from './number.show'

const Main = () => {
  const [blips, setBlips] = useState(Blips)
  const [addedBlips, setAddedBlips] = useState([] as number[])
  const [blip, setBlip] = useState(0)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {}, [])

  const addBlip = () => {
    if (blips.length) {
      const index = Math.floor(Math.random() * blips.length)

      setAddedBlips([...addedBlips, blips[index]])
      blips.splice(index, 1)
      setBlips(blips)
    }
  }

  const revealBlip = (reveal: boolean = true) => {
    if (addedBlips.length) {
      reveal && setIsHidden(true);
      const index = Math.floor(Math.random() * addedBlips.length)
      reveal && setBlip(addedBlips[index])
      setBlips([...blips, addedBlips[index]])
      addedBlips.splice(index, 1)
      setAddedBlips(addedBlips)
      reveal && setTimeout(() => {
        setIsHidden(false)
      }, 500)
    }
  }

  const addAndRevealBlip = () => {
    if (blips.length) {
      const index = Math.floor(Math.random() * blips.length)

      setIsHidden(true);
      setBlip(blips[index]);
      setTimeout(() => {
        setIsHidden(false);
      }, 500);
    }
  }

  const removeBlip = () => {
    revealBlip(false)
  }

  return (
    <Container className="main" sizing="100%">
        <Container className="flex no-grow">
          <Logo />
        </Container>

        <Container className="inverted">
          <Container className="flex jcenter">
            <NumberShow>{ blips.length }</NumberShow>
            <P>blip token pool</P>
          </Container>
          <Container className="flex jcenter">
            <NumberShow>{ addedBlips.length }</NumberShow>
            <P>blips spawned</P>
          </Container>
        </Container>

        <Container className="flex jcenter">
          { blip !== 0 && (
            <>
              <NumberShow className={`bigger ${isHidden ? 'hidden' : ''}`}>{ blip }</NumberShow>
              <P>last blip spotted</P>
            </>
          )}

          { blip === 0 && (
            <>
              <NumberShow className="bigger">-</NumberShow>
              <P>no blips spotted</P>
            </>
          )}
        </Container>

        <Container className="no-border flex no-grow">
          <P className="small">SYSTEM 4 · USS SULACO · 2179</P>
        </Container>

        <Container className="no-border flex jend">
          <Button text="Remove Blip (no spot)" disabled={addedBlips.length === 0} callback={removeBlip}></Button>
          <ButtonsContainer>
            <Button text="spawn & spot blip" callback={addAndRevealBlip} disabled={blips.length === 0} />
            <Button text="spawn blip" callback={addBlip} disabled={blips.length === 0} />
          </ButtonsContainer>
          <Button text="spot blip" callback={revealBlip} disabled={addedBlips.length === 0} inverse />
        </Container>
      </Container>
  )
}

export default Main