import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {AppWrapper} from '../style/app.style';

import Dashboard from '../components/pages/dashboard/content';

export default function AppContainer() {
    return (<AppWrapper className="app-container">
      <Dashboard></Dashboard>
    </AppWrapper>);
}
