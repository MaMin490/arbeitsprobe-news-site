import axios from 'axios'
import { Dispatch } from 'react'
import { FetchNewsError, FetchNewsPending, FetchNewsSuccess } from '../../config/types'

import {
  fetchNewsContentPending,
  fetchNewsContentSuccess,
  fetchNewsContentError,
} from './authAction'

function fetchNewsContent() {
  return async function (
    dispatch: Dispatch<FetchNewsPending | FetchNewsSuccess | FetchNewsError>
  ): Promise<void> {
    dispatch(fetchNewsContentPending())
    await axios
      .get('news-content.json')
      .then((res) => {
        dispatch(fetchNewsContentSuccess(res.data))
        return res.data
      })
      .catch((err) => {
        dispatch(fetchNewsContentError(err))
      })
  }
}

export default fetchNewsContent
