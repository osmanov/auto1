import React, { Suspense } from 'react'
import 'sanitize.css/sanitize.css'
import styled from 'styled-components'
import GlobalStyle from '../../styles/global-styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Loading from '../../components/Loading'
import { Route, Switch } from 'react-router-dom'

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  min-height: calc(100vh - 80px);
`
const HomePage = React.lazy(() => import('../HomePage'))
const CarPage = React.lazy(() => import('../CarPage'))
const NotFoundPage = React.lazy(() => import('../NotFoundPage'))

export default class Root extends React.Component {
  render() {
    return (
      <>
        <Wrapper>
          <Header />
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/car/:stockNumber" component={CarPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Suspense>
        </Wrapper>
        <Footer />
        <GlobalStyle />
      </>
    )
  }
}
