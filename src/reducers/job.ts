import Job from '../models/job';
import { UPDATE_QUEUE, SET_IS_REQUESTING_JOB, SET_REQUESTING_JOB, SET_IS_REQUESTING_CANCEL, SET_IS_IN_OPERATION } from '../actions/job';

interface State {
  queue: Job[];
  isRequestingJob: boolean;
  requestingJob?: Job;
  isRequestingCancel: boolean;
  isInOperation: boolean;
}

export default (state: State = {
  queue: [],
  isRequestingJob: false,
  requestingJob: undefined,
  isRequestingCancel: false,
  isInOperation: false
}, action: any): State => {
  switch (action.type) {
    case UPDATE_QUEUE:
      return {
        ...state,
        queue: action.payload.queue
      };
    case SET_IS_REQUESTING_JOB:
      return {
        ...state,
        isRequestingJob: action.payload.isRequestingJob
      };
    case SET_REQUESTING_JOB:
      return {
        ...state,
        requestingJob: action.payload.job
      };
    case SET_IS_REQUESTING_CANCEL:
      return {
        ...state,
        isRequestingCancel: action.payload.isRequestingCancel
      };
    case SET_IS_IN_OPERATION:
      return {
        ...state,
        isInOperation: action.payload.isInOperation
      };
    default:
      return state;
  }
};