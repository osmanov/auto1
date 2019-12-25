import React from 'react'
import { Input } from '../Input'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'

test('render a number input', () => {
  const { getByLabelText } = render(<Input />)
  const input = getByLabelText('Your number:')
  expect(input).toHaveAttribute('type', 'number')
})

test('entering invalid number to show an error', () => {
  const { getByLabelText, getByRole, rerender, queryByRole } = render(<Input />)
  const input = getByLabelText('Your number:')
  // fireEvent.change(input, { target: { value: '5' } })
  user.type(input, '5')
  expect(getByRole('alert')).toHaveTextContent('error message')
  rerender(<Input max={10} />)
  expect(queryByRole('alert')).toBeNull()
})
