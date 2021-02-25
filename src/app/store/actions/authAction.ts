import {
  ActionTypes,
  FetchNewsError,
  FetchNewsPending,
  FetchNewsSuccess,
  NewsContent,
} from '../../config/types'

export function fetchNewsContentPending(): FetchNewsPending {
  return {
    type: ActionTypes.FETCH_NEWS_CONTENT_PENDING,
  }
}

export function fetchNewsContentSuccess(content: NewsContent): FetchNewsSuccess {
  return {
    type: ActionTypes.FETCH_NEWS_CONTENT_SUCCESS,
    content,
  }
}

export function fetchNewsContentError(error: string): FetchNewsError {
  return {
    type: ActionTypes.FETCH_NEWS_CONTENT_ERROR,
    error,
  }
}
