import styled from 'styled-components'
import colors from '../../constants/colors';

interface IContainerProps {
  sizing?: string,
}

const Container = styled.div<IContainerProps>`
  border: 2px solid ${colors.main};
  box-shadow: inset 0 0 7px ${colors.main};
  display: flex;
  flex-direction: column;
  padding: 0.8vw;
  width: 100%;
  flex: 1 1 ${props => props.sizing ? props.sizing : '100%'};

  & + div {
    margin-top: 0.8vw;
  }

  &.main {
    max-width: 800px;
    min-width: 70%;
  }

  &.inverted {
    flex-direction: row;
    justify-content: space-between;

    div + div {
      margin-left: 0.8vw;
      margin-top: 0;
    }
  }
`

export default Container