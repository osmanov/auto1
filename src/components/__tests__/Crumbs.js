import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Main } from '../Crumbs'

test('we can navigate', () => {
  const history = createMemoryHistory({
    initialEntries: ['/']
  })
  const { getByText, getByRole } = render(
    <Router history={history}>
      <Main />
    </Router>
  )
  expect(getByRole('heading')).toHaveTextContent(/home/i)
  const about = getByText(/about/i)
  fireEvent.click(about)
  expect(getByRole('heading')).toHaveTextContent(/about/i)
})
test('landing on a bad page 404', () => {
  const history = createMemoryHistory({
    initialEntries: ['/weird']
  })
  const { getByText, getByRole } = render(
    <Router history={history}>
      <Main />
    </Router>
  )
  expect(getByRole('heading')).toHaveTextContent(/404/i)
})
