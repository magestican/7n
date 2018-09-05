import React from 'react';
import { shallow, mount} from 'enzyme';
import DashboardPage from '../components/pages/dashboard/content';
import {appWrapper, launchApp} from '../root';
import initialState from '../state/initialState';

describe('Dashboard Panel', () =>{

  it('should render properly',() =>{
    let renderedComponent = '';
    const render = (NextApp) => {
      renderedComponent = mount(appWrapper(NextApp,initialState), document.body);

      expect(renderedComponent.find('.dashboard-page').length).toBe(1);

    };
    launchApp(render);
  })
})
