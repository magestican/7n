import React, {Component } from 'react';
import {connect} from 'react-redux';
import {updateDashboardVideoShows} from '../../../actions/dashboard';
import VideoTile from '../../shared/videoTile';

@connect(mapStateToProps)
export default class DashboardContent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
  }

  render () {
    const {videoShows} = this.props;

    return (<div className="dashboard-page">
       {videoShows.map(show => {
         return <VideoTile key={show.id} show={show}/>
       })}
    </div>);
  }
}

function mapStateToProps(state) {
  return {videoShows: state.dashboardReducer.videoShows}
}
