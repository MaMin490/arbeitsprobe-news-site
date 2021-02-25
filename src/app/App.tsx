import React from 'react'
import { Container } from 'semantic-ui-react'
import { Route } from 'react-router-dom'

import LandingPage from './features/LandingPage'
import Impressum from './features/Impressum'
import NewsDetailed from './features/NewsDetailed'

export default function App(): JSX.Element {
  return (
    <>
      <Container className="main">
        <Route exact path="/" component={LandingPage} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/news/:id" component={NewsDetailed} />
      </Container>
    </>
  )
}
