import User from '../models/user';
import { Action } from 'redux';

interface State {
  me?: User,
  isJoined: boolean
}

export default (state: State = {
  me: undefined,
  isJoined: false 
}, action: Action): State => {
  switch(action.type) {
    default:
      return state;
  }
};