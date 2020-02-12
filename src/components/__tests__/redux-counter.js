import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { render, fireEvent } from '@testing-library/react'
import { Counter } from '../redux-counter'
import '@testing-library/jest-dom/extend-expect'
import { store as appStore } from '../redux-store'
import { reducer } from '../redux-reducer'

test('can render with redux', () => {
  const { getByLabelText, getByText } = render(
    <Provider store={appStore}>
      <Counter />
    </Provider>
  )
  fireEvent.click(getByText('+'))
  expect(getByLabelText(/count/i)).toHaveTextContent('1')
})

test('can render with redux with custom initial state', () => {
  const store = createStore(reducer, { count: 3 })
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <Counter />
    </Provider>
  )
  fireEvent.click(getByText('-'))
  expect(getByLabelText(/count/i)).toHaveTextContent('2')
})
