import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Link from '../../components/Link'
import { moduleName, fetchCars } from '../../ducks/cars'

const List = withRouter(({ history, data, loading }) => {
  if (loading) return <h1>{loading}</h1>
  return data.map(
    ({
      stockNumber,
      mileage,
      fuelType,
      color,
      manufacturerName,
      modelName
    }) => {
      return (
        <div>
          <h1>
            {manufacturerName}-{modelName}
          </h1>
          <div>stock #{stockNumber}</div>
          <div>
            {mileage.number} {mileage.unit}
          </div>
          <div>{fuelType}</div>
          <div>{color}</div>
          <Link
            onClick={() => {
              history.push({ pathname: `/car/${stockNumber}` })
            }}
          >
            View details
          </Link>
        </div>
      )
    }
  )
})

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      fuelType: PropTypes.string.isRequired,
      manufacturerName: PropTypes.string.isRequired,
      mileage: PropTypes.shape({
        number: PropTypes.number.isRequired,
        unit: PropTypes.string.isRequired
      }),
      modelName: PropTypes.string.isRequired,
      pictureUrl: PropTypes.string.isRequired,
      stockNumber: PropTypes.number
    })
  )
}
export default connect(state => ({
  loading: state[moduleName].loading,
  data: state[moduleName].data
}))(List)
