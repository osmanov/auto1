import React from 'react'

export function Input() {
  const [value, setValue] = React.useState(0)
  return (
    <div>
      <label htmlFor="number-input">Your number:</label>
      <input
        id="number-input"
        type="number"
        onChange={e => setValue(Number(e.target.value))}
        value={value}
      />
    </div>
  )
}
