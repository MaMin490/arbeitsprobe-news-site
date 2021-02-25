import React from 'react'
import { Button } from 'semantic-ui-react'

import { IPagination } from '../../config/types'

const style = {
  ul: {
    listStyle: 'none',
    display: 'flex',
    margin: 'auto',
    justifyContent: 'center',
  },
  li: {
    padding: '0.8rem',
    cursor: 'pointer',
    display: 'list-item',
  },
}

export default function Pagination({ totalPages, handleClick }: IPagination): JSX.Element {
  const pages = []

  for (let i = 1; i <= totalPages; i++) pages.push(i)

  const renderPageNumbers = pages.map((num: number) => (
    <li key={num} style={style.li}>
      <Button onClick={handleClick} onKeyDown={handleClick}>
        {num}
      </Button>
    </li>
  ))

  return (
    <>
      <ul style={style.ul}>{renderPageNumbers}</ul>
    </>
  )
}
