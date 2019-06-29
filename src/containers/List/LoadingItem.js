import React from 'react'
import styled from 'styled-components'
import Span from './Span'
import Title from './Title'
import Section from './Section'
import Picture from './Picture'
import Link from '../../components/Link'
import Wrapper from './Wrapper'

export default function LoadingItem() {
  return (
    <Wrapper>
      <Picture data-loading />
      <Section>
        <Title data-loading />
        <Span data-loading />
        <Span data-loading width="75" />
      </Section>
    </Wrapper>
  )
}
