import React from 'react'
import styled from 'styled-components'
import ButtonUI from '../../components/Button'

const Wrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
`
export default function Button(props) {
  return (
    <Wrapper>
      <ButtonUI {...props} />
    </Wrapper>
  )
}
