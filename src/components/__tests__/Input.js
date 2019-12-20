import React from 'react'
import ReactDOM from 'react-dom'
import { Input } from '../Input'
import '@testing-library/jest-dom/extend-expect'
import { getQueriesForElement } from '@testing-library/dom'

test('render a number input', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Input />, div)
  const { getByLabelText } = getQueriesForElement(div)
  const input = getByLabelText('Your number:')
  expect(input).toHaveAttribute('type', 'number')
})
