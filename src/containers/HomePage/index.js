import React from 'react'
import styled from 'styled-components'
import Filter from '../Filter'
import Sort from '../Sort'
import List from '../List'
import Paginator from '../Paginator'
import ColumnLeft from './ColumnLeft'
import ColumnRight from './ColumnRight'
import Title from './Title'

import Head from './Head'

const Wrapper = styled.div`
  display: flex;
  padding: 0 24px;
`

export default function HomePage() {
  return (
    <Wrapper>
      <ColumnLeft>
        <Filter />
      </ColumnLeft>
      <ColumnRight>
        <Head>
          <div>
            <Title>Available cars</Title>
            <div id="sort_section_portal" />
          </div>
          <Sort />
        </Head>

        <List />
        <Paginator />
      </ColumnRight>
    </Wrapper>
  )
}
