import React, { useState } from 'react'
import cuid from 'cuid'

import { NewsContent, NewsContents } from '../../../config/types'
import Pagination from '../../pagination/Pagination'
import SingleContent from './SingleContent'

export default function Contents({ newsContents }: NewsContents): JSX.Element {
  const [page, setPage] = useState(1)
  const indexOfLastItem = page * 8
  const indexOfFirstItem = indexOfLastItem - 8
  const totalPages = Math.ceil(newsContents.content.length / 8)

  const paginationContent = newsContents.content.slice(indexOfFirstItem, indexOfLastItem)

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = event.target as HTMLElement
    setPage(Number(target.innerText))
  }

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {paginationContent.map((newsContent: NewsContent) => (
          <SingleContent key={cuid()} newsContent={newsContent} />
        ))}
      </div>

      <Pagination totalPages={totalPages} handleClick={handleClick} />
    </>
  )
}
