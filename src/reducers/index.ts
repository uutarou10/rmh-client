import { combineReducers } from 'redux';
import job from './job';
import join from './join';
import user from './user';

export default combineReducers({
  job,
  join,
  user
});