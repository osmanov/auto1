import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { moduleName, fetchProperties } from '../../ducks/properties'

class HomePage extends React.Component {
  componentWillMount() {
    const { loaded, fetchProperties, fetchCars } = this.props
    if (!loaded) {
      fetchProperties()
    }
  }

  render() {
    return (
      <>
        <Filter />
        <CarsList />
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
