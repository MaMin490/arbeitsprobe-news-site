import { Action, ActionTypes } from '../../config/types'

const initialState = {
  pending: false,
  content: [],
  error: null,
}

export function newsContentReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.FETCH_NEWS_CONTENT_PENDING:
      return {
        ...state,
        pending: true,
      }
    case ActionTypes.FETCH_NEWS_CONTENT_SUCCESS:
      return {
        ...state,
        pending: false,
        content: action.content,
      }
    case ActionTypes.FETCH_NEWS_CONTENT_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      }
    default:
      return state
  }
}
