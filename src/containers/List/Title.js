import styled, { css } from 'styled-components'
import { gallery } from '../../styles/colors'
const Title = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  ${props => {
    if (props['data-loading']) {
      return css`
        background: ${gallery};
        width: 100%;
        height: 31px;
      `
    }
  }}
`
export default Title
