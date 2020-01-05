import React from 'react'
import { Editor } from '../EditorMarkup'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, wait } from '@testing-library/react'
import { savePost as mockSavePost } from '../../api'
jest.mock('../../api')

afterEach(() => {
  jest.clearAllMocks()
})
test('render form with title,sbm btn,content,tags', async () => {
  mockSavePost.mockResolvedValueOnce({ success: true })
  const { getByLabelText, getByText, debug } = render(<Editor />)
  const title = 'Test Title'
  const tags = 'tag1, tag2'
  const content = 'Test content'
  user.type(getByLabelText(/title/i), title)
  user.type(getByLabelText(/content/i), content)
  user.type(getByLabelText(/tags/i), tags)

  const submitBtn = getByText(/submit/i)
  fireEvent.click(submitBtn)
  expect(submitBtn).toBeDisabled()
  expect(mockSavePost).toHaveBeenCalledWith({
    title,
    tags: tags.split(),
    content
  })
  expect(mockSavePost).toHaveBeenCalledTimes(1)
  await wait(() => {
    expect(submitBtn).toBeEnabled()
  })
})
