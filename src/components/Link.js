import styled, { css } from 'styled-components'
import { ochre, tango } from '../styles/colors'
const Label = styled.span`
  color: ${ochre};
  color: ${props => props.pressed || `${tango}`};
  ${props => {
    if (!props.pressed) {
      return css`
        cursor: pointer;
        :hover {
          border-bottom: 1px solid ${tango};
        }
      `
    }
  }}
`
export default Label
