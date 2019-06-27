import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'
import Select from '../../components/Select'
import Button from '../../components/Button'

import { moduleName, fetchProperties } from '../../ducks/properties'
import {
  getInitialValues,
  getColorsOptions,
  getManufacturersOptions
} from './utils'

class Filter extends React.Component {
  componentDidMount() {
    const { fetchProperties } = this.props
    fetchProperties()
  }

  render() {
    console.log(this.props.properties)
    console.log(this.props.loading)
    // return null
    const {
      properties: { colors, manufacturers },
      loading,
      loaded
    } = this.props
    console.log({ loading })
    if (!loaded) return null
    return (
      <Form
        initialValues={getInitialValues()}
        onSubmit={values => console.log({ values })}
        render={({ handleSubmit, reset, pristine, values }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Select
                label="Color"
                name="colors"
                isDisabled={loading}
                options={getColorsOptions(colors)}
              />
              <Select
                label="Manufacturers"
                name="manufacturers"
                isDisabled={loading}
                options={getManufacturersOptions(manufacturers)}
              />
              <Button>Filter</Button>
            </form>
          )
        }}
      />
    )
  }
}
Filter.propTypes = {
  fetchProperties: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  properties: PropTypes.shape({
    color: PropTypes.array,
    manufacturers: PropTypes.array
  }).isRequired
}
export default connect(
  state => ({
    loading: state[moduleName].loading,
    loaded: state[moduleName].loaded,
    properties: state[moduleName].data
  }),
  { fetchProperties }
)(Filter)
