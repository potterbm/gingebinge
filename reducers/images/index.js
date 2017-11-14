import * as actionTypes from '../../constants/actionTypes';
import createReducer    from '../createReducer';
import initialState     from './initialState';

export default createReducer(initialState, {
  [actionTypes.LOAD_MESSAGES_PENDING]: (state, { payload: { roomId } }) => state.merge({
    areLoading      : true,
    loadedForRoomId : roomId,
  }),
});
