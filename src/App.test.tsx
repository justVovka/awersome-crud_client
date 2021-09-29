
import { ShallowWrapper, configure, shallow } from 'enzyme';
import React from 'react';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

describe('<App>', () => {
  let wrapper:ShallowWrapper<JSX.Element, React.Component['state'], React.Component>;

  beforeEach(() => {
    configure({ adapter: new Adapter() });
    wrapper = shallow(<App />);

  });
  test('App component should be render', () => {
    expect(wrapper.text()).toEqual('Application CRUD');
  });
});
