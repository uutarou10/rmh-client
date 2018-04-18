import User from '../models/user';
import { SET_ME, SET_IS_JOINED } from '../actions/user';

interface State {
  me?: User,
  isJoined: boolean
}

export default (state: State = {
  me: undefined,
  isJoined: false 
}, action: any): State => {
  switch(action.type) {
    case SET_ME:
      return {
        ...state,
        me: action.payload.user
      }
    case SET_IS_JOINED:
      return {
        ...state,
        isJoined: action.payload.isJoined
      }
    default:
      return state;
  }
};