import * as actionTypes from '../constants/actionTypes';

export default {
  setAuth: (authState) => ({
    type : actionTypes.SET_AUTH,
    auth : authState,
  }),
};
