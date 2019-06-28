import React from 'react'
import styled from 'styled-components'

const Item = styled.span`
  padding-left: 24px;
  cursor: pointer;
`

export default function Menu() {
  return (
    <div>
      <Item>Purchase</Item>
      <Item>My Orders</Item>
      <Item>Sell</Item>
    </div>
  )
}
