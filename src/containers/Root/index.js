import React from 'react'
import { connect } from 'react-redux'
import 'sanitize.css/sanitize.css'
import styled from 'styled-components'
import GlobalStyle from '../../styles/global-styles'
import { moduleName, fetchProperties } from '../../ducks/properties'
import { fetchCars } from '../../ducks/cars'
import Filter from '../Filter'
import Sort from '../Sort'
import List from '../List'
import Paginator from '../Paginator'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`

export default class Root extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Filter />
        <Sort />
        <Paginator />
        <List />
        <Footer />
        <GlobalStyle />
      </Wrapper>
    )
  }
}
