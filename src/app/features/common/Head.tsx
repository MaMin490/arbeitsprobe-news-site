import React from 'react'
import { Header, Container, Divider } from 'semantic-ui-react'
import { colors } from '../../config/colors'

const style = {
  header: {
    fontWeight: 1900,
    fontSize: '2.8rem',
    color: colors.black,
  },
  div: {
    paddingTop: '4rem',
  },
}

export default function Head(): JSX.Element {
  return (
    <div style={style.div}>
      <Container fixed="top">
        <Header as="header" content="News Website" style={style.header} textAlign="center" />
      </Container>
      <Divider inverted section />
    </div>
  )
}
