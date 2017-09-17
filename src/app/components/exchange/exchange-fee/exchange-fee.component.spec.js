import React from 'react';
import renderer from 'react-test-renderer';
import { toClass } from 'recompose';
import { mount } from 'enzyme';

import { ExchangeFee } from './exchange-fee.component';

describe('Exchange fee component', () => {
  it('renders exchange fee', () => {
    const ExchangeFeeComponent = toClass(ExchangeFee);
    const fee = 50;
    const openFeeInfo = jest.fn();
    const currency = {
      code: 'USD'
    };

    expect(renderer.create(
      <ExchangeFeeComponent fee={fee} openFeeInfo={openFeeInfo} currency={currency}/>
    ).toJSON()).toMatchSnapshot();
  });

  it('renders null when fee is zero', () => {
    const ExchangeFeeComponent = toClass(ExchangeFee);
    const fee = 0;
    const openFeeInfo = jest.fn();
    const currency = {
      code: 'USD'
    };

    expect(renderer.create(
      <ExchangeFeeComponent fee={fee} openFeeInfo={openFeeInfo} currency={currency}/>
    ).toJSON()).toMatchSnapshot();
  });

  it('handles fee info click', () => {
    const ExchangeFeeComponent = toClass(ExchangeFee);
    const fee = 50;
    const openFeeInfo = jest.fn();
    const currency = {
      code: 'USD'
    };
    const wrapper = mount(<ExchangeFeeComponent fee={fee} openFeeInfo={openFeeInfo} currency={currency}/>);

    wrapper.find('i').simulate('click');

    expect(openFeeInfo).toBeCalled();
  });
});
