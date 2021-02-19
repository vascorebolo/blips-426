import * as React from 'react'
import styled from 'styled-components'

const size = '100px'

const Blip = styled.span`
  height: ${size};
  width: ${size};
  display: inline-block;
  &:before {
    content: 'º';
  };
  font-size: ${size};
`
  // content: '⦾';

export default Blip;
