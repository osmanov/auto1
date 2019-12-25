import React from 'react'
import { GreetingLoader } from '../GreetingLoader'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, wait } from '@testing-library/react'
import { loadGreeting as mockLoadGreeting } from '../../api'

jest.mock('../../api')

test('load greetings on click', async () => {
  const testGreeting = 'TEST_GREETING'
  mockLoadGreeting.mockResolvedValueOnce({
    data: { greeting: testGreeting }
  })
  const { getByLabelText, getByText, debug } = render(<GreetingLoader />)
  const input = getByLabelText(/name/i)
  const button = getByText(/load/i)
  user.type(input, 'Remi')
  fireEvent.click(button)
  expect(mockLoadGreeting).toHaveBeenCalledWith('Remi')
  await wait(() => {
    expect(getByLabelText(/greeting/i)).toHaveTextContent(testGreeting)
  })
})
