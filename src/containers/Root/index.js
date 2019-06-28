import React from 'react'
import { connect } from 'react-redux'
import 'sanitize.css/sanitize.css'
import styled from 'styled-components'
import GlobalStyle from '../../styles/global-styles'
import HomePage from '../HomePage'
import CarPage from '../CarPage'
import NotFoundPage from '../NotFoundPage'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { moduleName, fetchProperties } from '../../ducks/properties'
import { fetchCars } from '../../ducks/cars'
import { Route, Switch } from 'react-router-dom'
const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  min-height: calc(100vh - 80px);
`

export default class Root extends React.Component {
  render() {
    return (
      <>
        <Wrapper>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/car/:stockNumber" component={CarPage} />
            <Route component={NotFoundPage} />
          </Switch>
          <GlobalStyle />
        </Wrapper>
        <Footer />
      </>
    )
  }
}
