import styled from 'styled-components'
import colors from '../../constants/colors'

const NumberShow = styled.p`
  display: block;
  font-family: 'Press Start 2P', cursive;
  font-size: calc(40px + 1.5vw);
  line-height: 105%;
  padding: 0 20px;
  text-align: center;

  & + p {
    margin-top: 2vh;
  }

  &.hidden {
    background-color: ${colors.main};
    box-shadow: 0 0 7px ${colors.main};
    color: transparent;
    text-shadow: none;
  }

  &.bigger {
    font-size: calc(60px + 1.5vw);
    padding: 1vw 0;
  }
`

export default NumberShow