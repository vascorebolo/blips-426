import styled from 'styled-components'

interface IH1Props {
  align?: string,
}

export const H1 = styled.h1<IH1Props>`
  font-size: 2vw;
  text-align: ${props => props.align ? props.align : 'left'};
`
