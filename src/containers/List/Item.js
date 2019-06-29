import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Span from '../../components/Span'
import Title from './Title'
import Section from './Section'
import Picture from '../../components/Picture'
import Link from '../../components/Link'
import Wrapper from './Wrapper'

const Item = withRouter(
  ({
    stockNumber,
    mileage,
    fuelType,
    color,
    manufacturerName,
    modelName,
    pictureUrl,
    history
  }) => {
    return (
      <>
        <Wrapper>
          <Picture url={pictureUrl} />
          <Section>
            <Title>
              {manufacturerName} {modelName}
            </Title>
            <Span block>
              <div>
                stock # {stockNumber} - {mileage.number}&nbsp;
                <Span uppercase>{mileage.unit}</Span>
                &nbsp; - {fuelType}
                &nbsp;- {color}
              </div>
              <Link
                onClick={() => {
                  history.push({ pathname: `/car/${stockNumber}` })
                }}
              >
                View details
              </Link>
            </Span>
          </Section>
        </Wrapper>
      </>
    )
  }
)

Item.propTypes = {
  color: PropTypes.string.isRequired,
  fuelType: PropTypes.string.isRequired,
  manufacturerName: PropTypes.string.isRequired,
  mileage: PropTypes.shape({
    number: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired
  }),
  modelName: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  stockNumber: PropTypes.number,
  history: PropTypes.object
}
export default Item
