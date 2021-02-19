import * as React from 'react';
import styled from 'styled-components'
import colors from '../../constants/colors'

type ButtonProps = {
  callback?: () => void,
  text: string,
}

const ButtonStyled = styled.button`
  apperance: none;
  background: transparent;
  border: 2px solid ${colors.main};
  box-shadow: inset 0 0 7px ${colors.main};
  color: ${colors.main};
  cursor: pointer;
  font-family: 'Press Start 2P', cursive;
  height: 50px;
  text-shadow: 0 0 10px ${colors.main}, 0 0 0.5px ${colors.main}, 0 0 1px ${colors.main}, 0 0 1.5px ${colors.main}, 0 0 2px ${colors.main};

  &:focus,
  &:active {
    outline: 0;
  }

  & + button {
    margin-top: 0.8vw;
  }
`

const Button = ({callback, text}: ButtonProps) => {
  const handleClick = () => {
    callback && callback();
  }

  return (
    <ButtonStyled onClick={handleClick}>
      { text }
    </ButtonStyled>
  )
}

export default Button