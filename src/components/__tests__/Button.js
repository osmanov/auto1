import React from 'react'
//import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import 'jest-styled-components'
import Button from 'components/Button'

test('Button render', () => {
  const { container } = render(<Button />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    .c0 {
      background: #D37324;
      background: #EA7F28;
      width: 128px;
      height: 32px;
      border: none;
      cursor: pointer;
      border: none;
      outline: none;
      font-size: 14px;
      border-radius: 2px;
      color: #fff;
    }

    <button
      class="c0"
    />
  `)
})

test('Button press', () => {
  const testMessage = 'Test message'
  const { getByText } = render(<Button>{testMessage}</Button>)
  const clearButton = getByText(testMessage)
  fireEvent.mouseDown(clearButton)
})
