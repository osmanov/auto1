export const getInitialValues = () => {
  return {
    colors: { value: '', label: 'None' },
    manufacturers: { value: '', label: 'None' }
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
