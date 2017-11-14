import * as actionTypes from '../constants/actionTypes';

export default {
  setSelectedTab: (selectedTab) => ({
    type : actionTypes.SET_SELECTED_TAB,
    selectedTab,
  }),
};
