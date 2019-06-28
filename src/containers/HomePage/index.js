import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { moduleName, fetchProperties } from '../../ducks/properties'

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Filter />
        <List />
        <Sort />
      </>
    )
  }
}
HomePage.propTypes = {
  fetchProperties: PropTypes.func.isRequired,
  currentUser: PropTypes.string
}
export default connect(
  state => ({
    // loading: state[moduleName].loading
  }),
  { fetchProperties }
)(Root)
