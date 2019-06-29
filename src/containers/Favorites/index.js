import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Section from './Section'
import { gallery } from '../../styles/colors'
import Button from '../../components/Button'
import { msgSave, msgRemove } from './constants'
const Wrapper = styled.div`
  border: 1px solid ${gallery};
  padding: 24px;
  font-size: 12px;
  width: 260px;
  margin-left: 48px;
`

const Favorites = withRouter(({ match }) => {
  const { stockNumber } = match.params
  const [isFavorite, setIsFavorite] = useState(
    !!localStorage.getItem(`stockNumber#${stockNumber}`)
  )

  return (
    <div>
      <Wrapper>
        <div>{isFavorite ? msgRemove : msgSave}</div>
        <Section>
          {isFavorite ? (
            <Button
              onClick={() => {
                localStorage.removeItem(`stockNumber#${stockNumber}`)
                setIsFavorite(false)
              }}
            >
              Remove
            </Button>
          ) : (
            <Button
              onClick={() => {
                localStorage.setItem(`stockNumber#${stockNumber}`, true)
                setIsFavorite(true)
              }}
            >
              Save
            </Button>
          )}
        </Section>
      </Wrapper>
    </div>
  )
})
export default Favorites
