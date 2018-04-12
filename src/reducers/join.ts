import { SET_DRAFT_USERNAME, SET_DRAFT_PASSWORD, SET_IS_REQUESTING_JOIN } from '../actions/join';

interface State {
  draftUsername: string,
  draftPassword: string,
  isRequestingJoin: boolean
}

export default (state: State = {
    draftUsername: '',
    draftPassword: '',
    isRequestingJoin: false
  }, action: any): State => {
  switch (action.type) {
    case SET_DRAFT_USERNAME:
      return {
        ...state,
        draftUsername: action.payload.input
      }
    case SET_DRAFT_PASSWORD:
      return {
        ...state,
        draftPassword: action.payload.input
      };
    case SET_IS_REQUESTING_JOIN:
      return {
        ...state,
        isRequestingJoin: action.payload.isRequesting
      };
    default:
      return state;
  }
};