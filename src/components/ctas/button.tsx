import * as React from 'react';
import styled from 'styled-components'
import colors from '../../constants/colors'

type ButtonProps = {
  callback?: () => void,
  text: string,
  disabled?: boolean,
  inverse?: boolean,
}

const ButtonStyled = styled.button`
  apperance: none;
  background: transparent;
  border: 2px solid ${colors.main};
  box-shadow: inset 0 0 7px ${colors.main};
  color: ${colors.main};
  cursor: pointer;
  font-family: 'Nostromo Regular', cursive;
  height: 50px;
  text-shadow: 0 0 10px ${colors.main}, 0 0 0.5px ${colors.main};
  text-transform: uppercase;
  &:focus,
  &:active {
    outline: 0;
  }

  & + button {
    margin-top: 0.8vw;
  }

  &:disabled {
    opacity: 0.5;
  }

  &.inverse {
    background-color: ${colors.main};
    box-shadow: 0 0 7px ${colors.main};
    color: ${colors.black};
    text-shadow: 0 0 10px ${colors.black}, 0 0 0.5px ${colors.black}, 0 0 1px ${colors.black}, 0 0 1.5px ${colors.black}, 0 0 2px ${colors.black};
  }
`

const Button = ({callback, text, disabled = false, inverse = false}: ButtonProps) => {
  const handleClick = () => {
    callback && callback();
  }

  return (
    <ButtonStyled
      onClick={handleClick}
      disabled={disabled}
      className={`${inverse ? 'inverse' : ''}`}
    >
      { text }
    </ButtonStyled>
  )
}

export default Button