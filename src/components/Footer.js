import React from 'react'
import styled from 'styled-components'
import { gallery, tundora } from '../styles/colors'

const Wrapper = styled.div`
  font-size: 0.85rem;
  height: 80px;
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${tundora};
  border-top: 1px solid ${gallery};
  align-items: center;
`

export default function Footer() {
  return (
    <Wrapper>
      <span>© AUTO1 Group 2018</span>
    </Wrapper>
  )
}
