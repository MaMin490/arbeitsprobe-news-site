import React from 'react'
import { Helmet } from 'react-helmet'

import { Metadecorator } from '../../../config/types'

export default function MetaDecorator({ title, description }: Metadecorator): JSX.Element {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Minervini Marco" />
    </Helmet>
  )
}
