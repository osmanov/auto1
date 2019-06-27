export const getInitialValues = () => {
  return {
    colors: { value: 'none', label: 'None' },
    manufacturers: { value: 'none', label: 'None' }
  }
}
export const getColorsOptions = colors => {
  return colors.reduce(
    (acc, current) => {
      return [...acc, { value: current, label: current }]
    },
    [{ ...getInitialValues().colors }]
  )
}
export const getManufacturersOptions = manufacturers => {
  return manufacturers.reduce(
    (acc, current) => {
      return [...acc, { value: current.name, label: current.name }]
    },
    [{ ...getInitialValues().manufacturers }]
  )
}
