import styled, { css } from 'styled-components'
import { gallery } from '../styles/colors'

const Picture = styled.div`
  background: url(${props => props.url}) center center no-repeat;
  background-size: contain;
  width: ${props => (props.lg ? '100%' : '120px')};
  height: ${props => (props.lg ? '300px' : '75px')};

  ${props => {
    if (props['data-loading']) {
      return css`
        background: ${gallery};
      `
    }
  }}
`
export default Picture
