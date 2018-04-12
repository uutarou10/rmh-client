export const SET_DRAFT_USERNAME = 'SET_DRAFT_USERNAME';
export const SET_DRAFT_PASSWORD = 'SET_DRAFT_PASSWORD';
export const SET_IS_REQUESTING_JOIN = 'SET_IS_REQUESTING_JOIN';

export const setDraftUsername = (input: string) => ({
  type: SET_DRAFT_USERNAME,
  payload: {
    input
  }
});

export const setDraftPassword = (input: string) => ({
  type: SET_DRAFT_PASSWORD,
  payload: {
    input
  }
});

export const setIsRequestingJoin = (isRequesting: boolean) => ({
  type: SET_IS_REQUESTING_JOIN,
  payload: {
    isRequesting
  }
});