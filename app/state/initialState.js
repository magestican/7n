
export const getEmptyVideoShow = ()=>{
  return {
    name : '',
    id : 0,
  }
}

export const initialDashboardState = {
  videoShows : [getEmptyVideoShow()]
}


export const initialState = {
  dashboardReducer: initialDashboardState
}
