import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
/*
*
* Tests, add the two listed test and minimum 3 more
* -------------------------------------
* - 'should display an input'
* - 'should display a button'
* - *
* - *
* - *
* -------------------------------------
*
* */
it('should display a input box for question', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('input[type="text"]').length).toBe(1);
});

it('should display a submit button ', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('button[type="submit"]').length).toBe(1);
});