import { Action } from 'redux';

interface State {
  draftUsername: string,
  draftPassword: string,
  isRequestingJoin: boolean
}

export default (state: State = {
    draftUsername: '',
    draftPassword: '',
    isRequestingJoin: false
  }, action:Action): State => {
  switch (action.type) {
    default:
      return state;
  }
};