import { combineReducers } from 'redux-immutable';
import auth                from './auth';
import images              from './images';
import ui                  from './ui';

export default combineReducers({
  auth,
  images,
  ui,
});
