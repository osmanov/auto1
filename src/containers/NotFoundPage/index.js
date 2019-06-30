import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../components/Logo'
import H1 from '../../components/H1'
import Span from './Span'
import Link from '../../components/Link'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 160px);
  align-items: center;
`
const NotFoundPage = withRouter(({ history }) => {
  return (
    <Wrapper>
      <Logo />
      <H1>404 - Not Found</H1>
      <Span>Sorry, the page you are looking for does not exist.</Span>
      <Span>
        You can always go back to the&nbsp;
        <Link
          onClick={() => {
            history.push({ pathname: `/` })
          }}
        >
          homepage
        </Link>
        .
      </Span>
    </Wrapper>
  )
})
export default NotFoundPage
