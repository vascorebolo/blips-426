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
`

export default Container