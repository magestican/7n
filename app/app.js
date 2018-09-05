import 'raf/polyfill'; // react needs this on its latest version

import React from 'react';
import ReactDOM from 'react-dom'
import {appWrapper, launchApp} from './root';


const MOUNT_NODE = document.getElementById('app');

const render = (NextApp) => {
  ReactDOM.render(appWrapper(NextApp), MOUNT_NODE);
};

launchApp(render)
