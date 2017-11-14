import { bindActionCreators } from 'redux';
import authActionCreators     from '../actionCreators/auth';
import uiActionCreators       from '../actionCreators/ui';

export default (dispatch) => ({
  authActions : bindActionCreators(authActionCreators, dispatch),
  uiActions   : bindActionCreators(uiActionCreators, dispatch),
});
