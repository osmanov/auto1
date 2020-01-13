import React from 'react'
import { Editor } from '../EditorMarkup'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, wait } from '@testing-library/react'
import { savePost as mockSavePost } from '../../api'
import { Redirect as MockRedirect } from 'react-router'
import { build, fake, sequence } from 'test-data-bot'

jest.mock('../../api')
jest.mock('react-router', () => {
  return {
    Redirect: jest.fn(() => null)
  }
})
const postBuilder = build('Post').fields({
  title: fake(f => f.lorem.words()),
  content: fake(f => f.lorem.paragraphs().replace(/\r/g, '')),
  tags: fake(f => [f.lorem.words(), f.lorem.words(), f.lorem.words()])
})

const post = postBuilder()

afterEach(() => {
  jest.clearAllMocks()
})
test('render form with title,sbm btn,content,tags', async () => {
  mockSavePost.mockResolvedValueOnce({ success: true })
  const { getByLabelText, getByText, debug } = render(<Editor />)
  const { title, content, tags } = post
  const preDate = new Date().getTime()
  user.type(getByLabelText(/title/i), title)
  user.type(getByLabelText(/content/i), content)
  user.type(getByLabelText(/tags/i), tags.join(' '))

  const submitBtn = getByText(/submit/i)
  fireEvent.click(submitBtn)
  expect(submitBtn).toBeDisabled()
  expect(mockSavePost).toHaveBeenCalledWith({
    title,
    date: expect.any(String),
    tags: tags.join(' '),
    content
  })
  expect(mockSavePost).toHaveBeenCalledTimes(1)
  await wait(() => {
    expect(submitBtn).toBeEnabled()
  })
  const postDate = new Date().getTime()
  const date = new Date(mockSavePost.mock.calls[0][0].date).getTime()
  expect(date).toBeGreaterThanOrEqual(preDate)
  expect(date).toBeLessThanOrEqual(postDate)
  expect(MockRedirect).toHaveBeenCalledWith({ to: '/' }, {})
  expect(MockRedirect).toHaveBeenCalledTimes(1)
})
