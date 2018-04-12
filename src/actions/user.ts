import User from "../models/user";

export const SET_ME = 'SET_ME';
export const SET_IS_JOINED = 'SET_IS_JOINED';

export const setMe = (user?: User) => ({
  type: SET_ME,
  payload: {
    user
  }
});

export const setIsJoined = (isJoined: boolean) => ({
  type: SET_IS_JOINED,
  payload: {
    isJoined
  }
});