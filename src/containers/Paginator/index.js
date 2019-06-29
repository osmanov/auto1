import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from '../../components/Link'
import {
  fetchCars,
  paginatorParamsSelector,
  filterSelector,
  sortSelector,
  moduleName
} from '../../ducks/cars'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  > div:first-child {
    span {
      margin-left: 24px;
    }
  }
  > div:last-child {
    span {
      margin-right: 24px;
    }
  }
  > div {
    margin-right: 24px;
  }
  margin: 24px 0;
`
function Paginator({ params, fetchCars, loading }) {
  const { current, last, next, sort, filter, first, prev } = params

  const handleOnFirstClick = useCallback(() => {
    const isClickable = !loading && current !== first
    isClickable && fetchCars({ ...filter, sort, page: first })
  }, [filter, first, sort, current, loading, fetchCars])

  const handleOnNextClick = useCallback(() => {
    const isClickable = !loading && next
    isClickable && fetchCars({ ...filter, sort, page: next })
  }, [filter, next, sort, loading, fetchCars])

  const handleOnPrevClick = useCallback(() => {
    const isClickable = !loading && prev
    isClickable && fetchCars({ ...filter, sort, page: prev })
  }, [filter, prev, sort, loading, fetchCars])

  const handleOnLastClick = useCallback(() => {
    const isClickable = !loading && current !== last
    isClickable && fetchCars({ ...filter, sort, page: last })
  }, [filter, last, sort, current, loading, fetchCars])

  return (
    <Wrapper>
      <div>
        <Link pressed={current === first} onClick={handleOnFirstClick}>
          First
        </Link>
        <Link pressed={!prev} onClick={handleOnPrevClick}>
          Previous
        </Link>
      </div>
      <div>
        Page {current} of {last}
      </div>
      <div>
        <Link pressed={!next} onClick={handleOnNextClick}>
          Next
        </Link>
        <Link pressed={current === last} onClick={handleOnLastClick}>
          Last
        </Link>
      </div>
    </Wrapper>
  )
}

Paginator.propTypes = {
  params: PropTypes.shape({
    next: PropTypes.number,
    prev: PropTypes.number,
    current: PropTypes.number,
    first: PropTypes.number,
    last: PropTypes.number
  }).isRequired,
  sort: PropTypes.string,
  filter: PropTypes.object,
  loading: PropTypes.bool.isRequired
}
export default connect(
  state => ({
    params: paginatorParamsSelector(state),
    sort: sortSelector(state),
    filter: filterSelector(state),
    loading: state[moduleName].loading
  }),
  {
    fetchCars
  }
)(Paginator)
