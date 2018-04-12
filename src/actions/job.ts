import Job from "../models/job";

export const UPDATE_QUEUE = 'UPDATE_QUEUE';
export const SET_IS_REQUESTING_JOB = 'IS_REQUESTING_JOB';
export const SET_REQUESTING_JOB = 'SET_REQUESTING_JOB';
export const SET_IS_REQUESTING_CANCEL = 'SET_IS_REQUESTING_CANCEL';
export const SET_IS_IN_OPERATION = 'SET_IS_IN_OPERATION';

export const updateQueue = (queue: Job[]) => ({
  type: UPDATE_QUEUE,
  payload: {
    queue
  }
});

export const setIsRequestingJob = (isRequesting: boolean) => ({
  type: SET_IS_REQUESTING_JOB,
  payload: {
    isRequesting
  }
});

export const setRequestingJob = (job: Job) => ({
  type: SET_REQUESTING_JOB,
  payload: {
    job
  }
});

export const setIsRequestingCancel = (isRequestingCancel: boolean) => ({
  type: SET_IS_REQUESTING_CANCEL,
  payload: {
    isRequestingCancel
  }
});

export const setIsInOperation = (isInOperation: boolean) => ({
  type: SET_IS_IN_OPERATION,
  payload: {
    isInOperation
  }
});