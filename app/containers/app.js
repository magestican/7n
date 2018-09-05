import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Dashboard from '../components/pages/dashboard/content';

export default function AppContainer() {
    return (<div className="app-container">
      <Dashboard></Dashboard>
    </div>);
}
