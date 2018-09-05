import {UPDATE_DASHBOARD_VIDEO_SHOWS
} from '../actions/dashboard';

import objectAssign from 'object-assign'; //need polyfill for android and ie

import { initialDashboardState } from '../state/initialState';

function dashboardReducer(state = initialDashboardState, action) {
  switch (action.type) {
    case UPDATE_DASHBOARD_VIDEO_SHOWS:
      return objectAssign({},state,{videoShows : action.data});
    default:
      return state;
  }
}

export default dashboardReducer;
