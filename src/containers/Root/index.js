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
const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`

export default class Root extends React.Component {
  render() {
    return (
      <Wrapper>
        <Filter />
        <Sort />
        <List />
        <GlobalStyle />
      </Wrapper>
    )
  }
}
