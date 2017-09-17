import React from 'react';
import renderer from 'react-test-renderer';
import { toClass } from 'recompose';
import { mount } from 'enzyme';

import { CurrencyInput } from './currency-input.component';

describe('Currency input component', () => {
  it('renders currency input', () => {
    const amount= '1234';
    const onChange = jest.fn();
    const prefix = "+";

    const CurrencyInputComponent = toClass(CurrencyInput);

    expect(renderer.create(<CurrencyInputComponent
      amount={amount}
      prefix={prefix}
      onChange={onChange}
    />).toJSON()).toMatchSnapshot();
  });

  it('it updates input when valid character pressed', () => {
    const amount= "1234";
    const onChange = jest.fn();
    const prefix = "+";

    const CurrencyInputComponent = toClass(CurrencyInput);

    const wrapper = mount(<CurrencyInputComponent
      amount={amount}
      prefix={prefix}
      onChange={onChange}
    />);

    wrapper.find('input').simulate('keyDown', { key: '1', keyCode: 20 });

    expect(onChange).toBeCalledWith('12341');
  });

  it('it does not updates input when invalid character pressed', () => {
    const amount= "1234";
    const onChange = jest.fn();
    const prefix = "+";

    const CurrencyInputComponent = toClass(CurrencyInput);

    const wrapper = mount(<CurrencyInputComponent
      amount={amount}
      prefix={prefix}
      onChange={onChange}
    />);

    wrapper.find('input').simulate('keyDown', { key: 'a', keyCode: 20 });

    expect(onChange).not.toBeCalled();
  });
});
