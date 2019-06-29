import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'
import Select from '../../components/Select'
import Button from './Button'
import { gallery } from '../../styles/colors'
import {
  moduleName as moduleNameProps,
  fetchProperties
} from '../../ducks/properties'
import { moduleName as moduleNameCars, fetchCars } from '../../ducks/cars'
import {
  getInitialValues,
  getColorsOptions,
  getManufacturersOptions
} from './utils'

const initialValues = getInitialValues()
const Wrapper = styled.div`
  margin-top: 24px;
  padding: 24px;
  border: 1px solid ${gallery};
`
class Filter extends React.Component {
  componentDidMount() {
    const { fetchProperties } = this.props
    fetchProperties()
  }
  handleOnSubmit = values => {
    const { fetchCars, sort } = this.props
    const { colors, manufacturers } = values
    fetchCars({ color: colors.value, manufacturer: manufacturers.value, sort })
  }
  render() {
    const {
      properties: { colors, manufacturers },
      loading
    } = this.props

    return (
      <Wrapper>
        <Form
          initialValues={initialValues}
          onSubmit={this.handleOnSubmit}
          render={({ handleSubmit, reset, pristine, values }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Select
                  label="Color"
                  name="colors"
                  isDisabled={loading}
                  options={colors && getColorsOptions(colors)}
                />
                <Select
                  label="Manufacturers"
                  name="manufacturers"
                  isDisabled={loading}
                  options={
                    manufacturers && getManufacturersOptions(manufacturers)
                  }
                />
                <Button
                  onClick={handleSubmit}
                  pressed={loading}
                  disabled={loading}
                >
                  Filter
                </Button>
              </form>
            )
          }}
        />
      </Wrapper>
    )
  }
}
Filter.propTypes = {
  fetchProperties: PropTypes.func.isRequired,
  fetchCars: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  properties: PropTypes.shape({
    colors: PropTypes.array,
    manufacturers: PropTypes.array
  }).isRequired
}
export default connect(
  state => ({
    loading: state[moduleNameProps].loading || state[moduleNameCars].loading,
    properties: state[moduleNameProps].data,
    sort: state[moduleNameCars].sort
  }),
  { fetchProperties, fetchCars }
)(Filter)
