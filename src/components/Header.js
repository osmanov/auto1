import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import img from '../images/logo.png'
import Menu from './Menu'

import { gallery, tundora } from '../styles/colors'

const Wrapper = styled.div`
  font-size: 0.85rem;
  height: 80px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${tundora};
  border-bottom: 1px solid ${gallery};
  align-items: center;
  padding: 0 24px;
`
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

export default function Header() {
  return (
    <Wrapper>
      <Logo />
      <Menu />
    </Wrapper>
  )
}
