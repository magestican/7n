import { combineReducers } from 'redux';
import dashboardReducer from './dashboard';

export default function createReducer(injectedReducers) {

  let appReducer = combineReducers({
    dashboardReducer : dashboardReducer,
    ...injectedReducers
  });
  const rootReducer = (state, action) => {
    return appReducer(state, action)
  }
  return rootReducer;
}
