//THIS ARCHITECTURE MAKES SELECTING A RENDER TARGET EASIER
import React from 'react';
import App from './containers/app'
import createHistory from 'history/createBrowserHistory';
import {initialState } from './state/initialState';
import { Router } from 'react-router-dom';
import configureStore from './configureStore';
import { AppContainer } from 'react-hot-loader';
import {Provider} from 'react-redux';

const history = createHistory();
// Create redux with history
let store = configureStore(initialState, history);

export const appWrapper = (NextApp,injectedStore = store, injectedHistory = history) => {
  return <AppContainer><Provider store={injectedStore}>
      <Router  history={injectedHistory}>
        <NextApp></NextApp>
      </Router>
  </Provider></AppContainer>
}

export const launchApp = (customRender = render)=>{
      if (module.hot) {
        module.hot.accept('containers/app', () => {
          const NextApp = require('containers/app').default;
          customRender(NextApp);
        });
        customRender(App);
      } else {
        customRender(App);
      }
}
