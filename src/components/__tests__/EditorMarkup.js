import React from 'react'
import { Editor } from '../EditorMarkup'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'

test('render form with title,sbm btn,content,tags', () => {
  const { getByLabelText, getByText, debug } = render(<Editor />)
  getByLabelText(/title/i)
  getByLabelText(/tags/i)
  getByLabelText(/content/i)
  const submitBtn = getByText(/submit/i)
  fireEvent.click(submitBtn)
  expect(submitBtn).isDisabled()
})
