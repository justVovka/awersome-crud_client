import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

describe('<App>', () => {
  let wrapper:ShallowWrapper<any, React.Component['state'], React.Component>;

  beforeEach(() => {
    configure({adapter: new Adapter()});
    wrapper = shallow(<App />);

  });
  test('App component should be render', () => {
    expect(wrapper.text()).toEqual('Application');
  });
});
