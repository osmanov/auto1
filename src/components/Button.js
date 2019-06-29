import styled, { css } from 'styled-components'
import { tango, ochre, gallery } from '../styles/colors'

const Button = styled.button`
  background: ${ochre};
  background: ${props => props.pressed || `${tango}`};
  width: 128px;
  height: 32px;
  border: none;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 14px;
  border-radius: 2px;
  color: #fff;
`
export default Button
