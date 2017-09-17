import React from 'react';
import renderer from 'react-test-renderer';
import { toClass } from 'recompose';
import { mount } from 'enzyme';

import { ExchangeButton } from './exchange-button.component';

describe('Exchange button component', () => {
  it('renders exchange button', () => {
    const ExchangeButtonComponent = toClass(ExchangeButton);

    const onClick = jest.fn();

    expect(renderer.create(<ExchangeButtonComponent disabled={true} onClick={onClick}/>).toJSON()).toMatchSnapshot();
  });

  it('handles clicks if not disabled', () => {
    const ExchangeButtonComponent = toClass(ExchangeButton);
    const onClick = jest.fn();
    const wrapper = mount(<ExchangeButtonComponent disabled={false} onClick={onClick}/>);

    wrapper.find('button').simulate('click');

    expect(onClick).toBeCalled();
  });

  it('handles clicks if disabled', () => {
    const ExchangeButtonComponent = toClass(ExchangeButton);
    const onClick = jest.fn();
    const wrapper = mount(<ExchangeButtonComponent disabled={true} onClick={onClick}/>);

    wrapper.find('button').simulate('click');

    expect(onClick).not.toBeCalled();
  });
});
