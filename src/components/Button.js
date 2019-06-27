import styled, { css } from 'styled-components'
import { tango, ochre } from '../styles/colors'

const Button = styled.button`
  background: ${props => props.pressed || `${ochre}`};
  background: ${tango};
  width: 128px;
  height: 32px;
  border: none;
  color: white;
`
export default Button
