import styled, { css } from 'styled-components'
import { gallery } from '../../styles/colors'

const Span = styled.span`
  font-size: 0.85rem;
  text-transform: uppercase;
  display: block;
  text-transform: ${props => props.uppercase || `capitalize`};
  display: ${props => props.block || `inline`};
  > div {
    margin-bottom: 8px;
    height: 14px;
  }
  ${props => {
    if (props['data-loading']) {
      return css`
        background: ${gallery};
        width: 100%;
        display: block;
        height: 14px;
      `
    }
  }}
`
export default Span
