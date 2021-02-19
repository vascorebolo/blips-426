import styled from 'styled-components'

interface IH1Props {
  align?: string,
}

export const H1 = styled.h1<IH1Props>`
  font-size: 5vw;
  text-align: ${props => props.align ? props.align : 'left'};
`

export const P = styled.p`
  font-size: 12px;
  text-align: center;
`
