import React from 'react'
import SelectUI from 'react-select'
import { Field } from 'react-final-form'
import Label from './Label'
export const adapt = Component => ({ input, meta: { valid }, ...rest }) => (
  <Component {...input} {...rest} valid={valid} />
)
const AdaptedSelect = adapt(SelectUI)
const customStyles = {
  control: provided => {
    return {
      ...provided,
      background: '#FFFFFF',
      border: '1px solid #E7EAF3',
      boxSizing: 'border-box',
      borderRadius: '3px',
      height: '36px',
      width: '240px'
    }
  },
  indicatorSeparator: provided => {
    return { ...provided, display: 'none' }
  },
  dropdownIndicator: provided => {
    return { ...provided, color: '#2F4858' }
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
export default function Select({ label, ...props }) {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <Field {...props} component={AdaptedSelect} styles={customStyles} />
    </div>
  )
}
