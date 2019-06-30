import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import { OnChange } from 'react-final-form-listeners'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'
import Select from '../../components/Select'

import { moduleName, fetchCars } from '../../ducks/cars'
import { getInitialValues, getSortOptions } from './utils'

export function Sort({ fetchCars, filter, loading }) {
  return (
    <Form
      initialValues={useMemo(() => getInitialValues(), [])}
      onSubmit={() => {}}
      render={({ handleSubmit, reset, pristine, values }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Select
              label="Sort by"
              name="sort"
              isDisabled={loading}
              options={getSortOptions()}
            />
            <OnChange name="sort">
              {sort => {
                fetchCars({ sort: sort.value, ...filter })
              }}
            </OnChange>
          </form>
        )
      }}
    />
  )
}

Sort.propTypes = {
  fetchCars: PropTypes.func.isRequired
}
export default connect(
  state => ({
    loading: state[moduleName].loading,
    filter: state[moduleName].filter
  }),
  { fetchCars }
)(Sort)
