import React, { useEffect } from 'react'
import { Header, Container } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'

import { colors } from '../config/colors'
import MetaDecorator from './common/util/MetaDecorator'
import fetchNewsContent from '../store/actions/fetchNewsContent'
import Contents from './common/newsContent/Contents'
import { IState } from '../config/types'

const style = {
  h1: {
    fontSize: '2.1rem',
    color: colors.black,
  },
}

export default function LandingPage(): JSX.Element {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNewsContent())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const newsContents = useSelector((state: IState) => state.newsContent)
  const description = newsContents?.content[0]

  return (
    <>
      <MetaDecorator title="News Site - Home" description={`${description?.content}`} />
      <Container fixed="top">
        <Header as="header" content="Actual News" style={style.h1} textAlign="center" />
        <Contents newsContents={newsContents} />
      </Container>
    </>
  )
}
