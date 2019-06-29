import React, { useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Favorites from '../Favorites'
import { moduleName, fetchCar } from '../../ducks/car'

function CarPage({ match, fetchCar, error, loading, data }) {
  const { stockNumber } = match.params
  const { mileage, fuelType, color, manufacturerName, modelName } = data
  const fetchByStockNumber = useCallback(() => {
    fetchCar(stockNumber)
  }, [stockNumber, fetchCar])

  useEffect(() => {
    fetchByStockNumber()
  }, [fetchByStockNumber])

  if (error) {
    return <h1>{error.message}</h1>
  }
  if (loading || !Object.keys(data).length) {
    return <h1>Loading...</h1>
  }
  return (
    <>
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
        <Favorites />
      </div>
    </>
  )
}

CarPage.propTypes = {
  data: PropTypes.shape({
    stockNumber: PropTypes.number,
    manufacturerName: PropTypes.string,
    color: PropTypes.string,
    mileage: PropTypes.shape({
      number: PropTypes.number,
      unit: PropTypes.string
    }),
    fuelType: PropTypes.string,
    pictureUrl: PropTypes.string
  }),
  loading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired
}
export default connect(
  state => ({
    data: state[moduleName].data,
    loading: state[moduleName].loading,
    error: state[moduleName].error
  }),
  {
    fetchCar
  }
)(CarPage)
