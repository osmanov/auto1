import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import { HiddenMessage } from '../HiddenMessage'
import '@testing-library/jest-dom/extend-expect'

jest.mock('react-transition-group', () => {
  return {
    CSSTransition: props => (props.in ? props.children : null)
  }
})
test('toggle hidden message when it is clicked', () => {
  const msg = 'hi everyone'
  const { getByText, queryByText } = render(
    <HiddenMessage>{msg}</HiddenMessage>
  )
  const btn = getByText(/toggle/i)
  expect(queryByText(msg)).not.toBeInTheDocument()
  fireEvent.click(btn)
  expect(queryByText(msg)).toBeInTheDocument()
  fireEvent.click(btn)
  expect(queryByText(msg)).not.toBeInTheDocument()
})
