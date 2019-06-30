import React from 'react'
import SelectUI from 'react-select'
import { Field } from 'react-final-form'
import styled from 'styled-components'
import Label from './Label'
import { gallery, tundora, tango } from '../styles/colors'
export const adapt = Component => ({ input, meta: { valid }, ...rest }) => (
  <Component {...input} {...rest} valid={valid} />
)
const AdaptedSelect = adapt(SelectUI)
const customStyles = {
  control: provided => {
    return {
      ...provided,
      background: '#FFFFFF',
      border: `1px solid ${gallery}`,
      boxSizing: 'border-box',
      borderRadius: '2px',
      boxShadow: 'none',
      width: '240px',
      '&:hover': {
        borderColor: 'none'
      }
    }
  },
  option: (provided, { isFocused, isSelected }) => {
    return {
      ...provided,
      backgroundColor: isSelected || isFocused ? tango : null,
      color: isSelected || isFocused ? '#fff' : null,
      ':active': {
        ...provided[':active'],
        color: '#fff',
        backgroundColor: tango
      }
    }
  },
  singleValue: provided => {
    return { ...provided, color: tundora }
  },
  indicatorSeparator: provided => {
    return { ...provided, display: 'none' }
  },

  dropdownIndicator: (provided, state) => {
    return {
      ...provided,
      color: gallery,
      transition: 'all .2s ease',
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null
    }
  },
  placeholder: provided => {
    return {
      ...provided,
      fontSize: '12px',
      fontStyle: 'italic',
      lineHeight: '22px',
      color: '#788999'
    }
  }
}
const Wrapper = styled.div`
  margin-bottom: 12px;
`
const StyledLabel = styled(Label)`
  margin-bottom: 8px;
`
export default function Select({ label, ...props }) {
  return (
    <Wrapper>
      {label && <StyledLabel>{label}</StyledLabel>}
      <Field {...props} component={AdaptedSelect} styles={customStyles} />
    </Wrapper>
  )
}
