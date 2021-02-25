import React from 'react'
import { Header, Segment, Button } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { IState, MatchParams } from '../config/types'
import MetaDecorator from './common/util/MetaDecorator'

const style = {
  segment: {
    height: 'auto',
    margin: '0.3rem',
  },
  h2: {
    fontSize: '2.1rem',
    margin: '0',
  },
  h3: {
    fontSize: '1.5rem',
    margin: '0',
  },
  h4: {
    fontSize: '1.1rem',
    margin: '0.5rem 0 ',
  },
}

export default function NewsDetailed({ match }: MatchParams): JSX.Element {
  const singleNewsContent = useSelector((state: IState) =>
    state.newsContent.content.find((e) => e.id === Number(match.params.id))
  )

  return (
    <>
      <MetaDecorator
        title={`News Site - ${singleNewsContent?.title}`}
        description={`${singleNewsContent?.content}`}
      />
      <Segment textAlign="center" style={style.segment}>
        <Header
          as="h2"
          content={`${singleNewsContent?.title}`}
          style={style.h2}
          textAlign="center"
        />
        <Header
          as="h3"
          content={`${singleNewsContent?.subtitle}`}
          style={style.h3}
          textAlign="center"
        />
        <Header
          as="h4"
          content={`Von ${singleNewsContent?.author}`}
          style={style.h4}
          textAlign="center"
        />
        <p>{` ${singleNewsContent?.content}`}</p>
        <Button as={Link} to="/" content="Back" color="teal" />
      </Segment>
    </>
  )
}
