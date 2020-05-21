import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdaptor() });

test('renders without errors', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});
test('renders increment counter', () => {});
test('render counter display', () => {});
test('counter start at 0', () => {});
test('clicking button increment counter display', () => {});
