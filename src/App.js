import React, { Component } from 'react'
import Root from './containers/Root'
import store from './redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Root />
        </Router>
      </Provider>
    )
  }
}

export default App
