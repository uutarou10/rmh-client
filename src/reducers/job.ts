import { Action } from "redux";
import Job from '../models/job'

interface State {
  queue: Job[],
  isRequestingJob: boolean,
  requestingJob?: Job,
  isRequestingCancel: boolean,
  isInOperation: boolean
}

export default (state: State = {
  queue: [],
  isRequestingJob: false,
  requestingJob: null,
  isRequestingCancel: false,
  isInOperation: false
}, action: Action): State => {
  switch (action.type) {
    default:
      return state;
  }
};