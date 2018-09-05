import homeAndAwayTile from '../assets/images/tile.jpg';

export const getEmptyVideoShow = ()=>{
  return {
    name : '',
    id : 0,
    imageUrl : ''
  }
}

let hardcodedData = getEmptyVideoShow();
hardcodedData.name = 'Home and away';
hardcodedData.imageUrl = homeAndAwayTile;
export const initialDashboardState = {
  videoShows : [hardcodedData]
}


export const initialState = {
  dashboardReducer: initialDashboardState
}
