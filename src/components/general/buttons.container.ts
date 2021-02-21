import styled from 'styled-components'

const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 0.8vw;

  & + Button {
    margin-top: 0.8vw;
  }

  Button {
    flex: 1;
  }

  Button + Button {
    margin-top: 0;
  }
`

export default ButtonsContainer