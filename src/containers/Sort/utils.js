export const getInitialValues = () => {
  return {
    sort: { value: '', label: 'None' }
  }
}
export const getSortOptions = () => {
  return [
    { ...getInitialValues().sort },
    { value: 'asc', label: 'Mileage - Ascending' },
    { value: 'des', label: 'Mileage - Descending' }
  ]
}
