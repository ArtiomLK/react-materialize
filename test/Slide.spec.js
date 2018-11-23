import React from 'react';
import { shallow } from 'enzyme';
import Slide from '../src/Slide';

describe('<Slide />', () => {
  let wrapper = shallow(<Slide src="#" />);

  test('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render a Slide', () => {
    expect(wrapper.childAt(0).is('img')).toEqual(true);
    expect(wrapper.childAt(0).is({ src: '#' })).toEqual(true);
  });

  test('can render a custom caption', () => {
    wrapper = shallow(
      <Slide src="#">
        <h2>test</h2>
      </Slide>
    );
    expect(wrapper.childAt(1).is('h2')).toEqual(true);
  });
});
