import styled from 'styled-components'

interface IH1Props {
  align?: string,
}

export const H1 = styled.h1<IH1Props>`
  font-size: calc(25px + 1vw);
  text-align: ${props => props.align ? props.align : 'left'};

  &.title {
    font-family: 'Press Start 2P', cursive;
    font-size: calc(4px + 0.1vw);
  }
`

export const P = styled.p`
  font-size: 12px;
  text-align: center;

  &.small {
    font-size: 8px;
  }

  &.left {
    text-align: left;
  }

  &.right {
    text-align: right;
  }
`
