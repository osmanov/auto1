import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import img from '../images/logo.png'

const StyledLogo = styled.div`
  background: url(${img}) center center no-repeat;
  background-size: contain;
  width: 180px;
  height: 65px;
  cursor: pointer;
`

const Logo = withRouter(({ history, text }) => {
  return (
    <StyledLogo
      onClick={() => {
        history.push({ pathname: `/` })
      }}
    >
      {text}
    </StyledLogo>
  )
})

export default Logo
