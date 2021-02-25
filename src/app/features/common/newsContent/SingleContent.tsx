import React from 'react'
import { Header, Segment, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { IContent } from '../../../config/types'

const style = {
  segment: {
    height: 'auto',
    width: '19.5rem',
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

export default function SingleContent({ newsContent }: IContent) {
  return (
    <section>
      <Segment textAlign="center" style={style.segment}>
        <Header as="h2" content={`${newsContent.title}`} style={style.h2} textAlign="center" />
        <Header as="h3" content={`${newsContent.subtitle}`} style={style.h3} textAlign="center" />
        <Header as="h4" content={`Von ${newsContent.author}`} style={style.h4} textAlign="center" />
        <p>{` ${newsContent.content}`}</p>
        <Button as={Link} to={`/news/${newsContent.id}`} content="View" color="teal" />
      </Segment>
    </section>
  )
}
