export type Action = FetchNewsSuccess | FetchNewsPending | FetchNewsError

export interface FetchNewsSuccess {
  type: ActionTypes.FETCH_NEWS_CONTENT_SUCCESS
  content: NewsContent
}

export interface FetchNewsPending {
  type: ActionTypes.FETCH_NEWS_CONTENT_PENDING
}

export interface FetchNewsError {
  type: ActionTypes.FETCH_NEWS_CONTENT_ERROR
  error: string
}

export enum ActionTypes {
  FETCH_NEWS_CONTENT_PENDING,
  FETCH_NEWS_CONTENT_ERROR,
  FETCH_NEWS_CONTENT_SUCCESS,
}

export interface NewsContent {
  id: number
  title: string
  subtitle: string
  author: string
  content: string
}

export interface IContent {
  newsContent: NewsContent
}

export interface NewsContents {
  newsContents: { content: NewsContent[] }
}

export interface Metadecorator {
  title: string
  description: string
}

export interface IPagination {
  totalPages: number
  handleClick(event: React.MouseEvent<HTMLElement>): void
}

export interface IState {
  newsContent: { content: NewsContent[] }
  error: null | string
  pending: boolean
}

export interface IEvent {
  target: {
    innerText: string
  }
}

export interface MatchParams {
  match: {
    params: {
      id: string
    }
  }
}
