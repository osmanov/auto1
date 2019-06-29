import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Button from '../../components/Button'
import { msgSave, msgRemove } from './constants'

const Favorites = withRouter(({ match }) => {
  const { stockNumber } = match.params
  const [isFavorite, setIsFavorite] = useState(
    !!localStorage.getItem(`stockNumber#${stockNumber}`)
  )

  return (
    <div>
      {isFavorite ? msgRemove : msgSave}
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
    </div>
  )
})
export default Favorites
