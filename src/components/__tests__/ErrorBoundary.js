import React from 'react'
import { ErrorBoundary } from '../ErrorBoundary'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { reportError as mockReportError } from '../../api'

jest.mock('../../api')

afterEach(() => {
  jest.clearAllMocks()
})

function Bomb({ isError }) {
  if (isError) {
    throw new Error('Bomb')
  }
  return null
}

test('should spit an error', () => {
  mockReportError.mockResolvedValueOnce({ success: true })
  const { rerender } = render(
    <ErrorBoundary>
      <Bomb />
    </ErrorBoundary>
  )

  rerender(
    <ErrorBoundary>
      <Bomb isError />
    </ErrorBoundary>
  )

  const error = expect.any(Error)
  const info = { componentStack: expect.stringContaining('Bomb') }
  expect(mockReportError).toHaveBeenCalledWith(error, info)
  expect(mockReportError).toHaveBeenCalledTimes(1)
})
// this is only here to make the error output not appear in the project's output
// even though in the course we don't include this bit and leave it in it's incomplete state.
beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
})
afterEach(() => {
  console.error.mockRestore()
})
