import React from 'react'
import Filter from '../Filter'
import Sort from '../Sort'
import List from '../List'
import Paginator from '../Paginator'

export default function HomePage() {
  return (
    <>
      <Filter />
      <Sort />
      <Paginator />
      <List />
    </>
  )
}
