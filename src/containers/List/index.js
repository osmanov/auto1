import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SubTitle from './SubTitle'
import SortPortal from '../Sort/Portal'
import { moduleName } from '../../ducks/cars'
import Item from './Item'
import LoadingItem from './LoadingItem'

const renderSubTitle = ({ data, totalCarsCount, loading }) => {
  return (
    <SortPortal>
      <SubTitle>
        {loading || !data.length
          ? 'Loading...'
          : `Showing ${data.length} of ${totalCarsCount} results`}
      </SubTitle>
    </SortPortal>
  )
}
const List = ({ data, loading, totalCarsCount }) => {
  if (loading) {
    return (
      <>
        {renderSubTitle({ data, totalCarsCount, loading })}
        {[...Array(10).keys()].map(key => {
          return <LoadingItem key={key} />
        })}
      </>
    )
  }

  return (
    <>
      {renderSubTitle({ data, totalCarsCount, loading })}
      {data.map((item, index) => {
        return <Item key={`${item.stockNumber}${index}`} {...item} />
      })}
    </>
  )
}

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
  ),
  totalCarsCount: PropTypes.number
}
export default connect(state => ({
  loading: state[moduleName].loading,
  data: state[moduleName].data,
  totalCarsCount: state[moduleName].totalCarsCount
}))(List)
