import React, {Component } from 'react';
import {connect} from 'react-redux';
@connect(mapStateToProps)
export default class DashboardContent extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (<div className="dashboard-page">
       hi im the dashboard page
    </div>);
  }
}

function mapStateToProps(state) {
  return {videoShows: state.dashboardReducer.videoShows}
}
