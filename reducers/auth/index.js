import * as actionTypes from '../../constants/actionTypes';
import createReducer    from '../createReducer';
import initialState     from './initialState';

export default createReducer(initialState, {
  [actionTypes.SET_AUTH]: (state, { auth }) => state.set('isLoggedIn', auth),
});
