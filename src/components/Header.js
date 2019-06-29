import React from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import Logo from './Logo'
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

export default function Header() {
  return (
    <Wrapper>
      <Logo />
      <Menu />
    </Wrapper>
  )
}
