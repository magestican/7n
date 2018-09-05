export const UPDATE_DASHBOARD_VIDEO_SHOWS = 'dashboardpage/UPDATE_DASHBOARD_VIDEO_SHOWS';

export function updateDashboardVideoShows(newData) {
  return {
    type: UPDATE_DASHBOARD_VIDEO_SHOWS,
    data : newData
  };
}
