import React from 'react';
import renderer from 'react-test-renderer';
import { toClass } from 'recompose';

import { ExchangeRate } from './exchange-rate.component';

describe('Exchange rate component', () => {
  it('renders exchange rate', () => {
    const ExchangeRateComponent = toClass(ExchangeRate);
    const from = 'USD';
    const to = 'EUR';
    const rate = 0.123345;

    expect(renderer.create(
      <ExchangeRateComponent from={from} to={to} rate={rate}/>
    ).toJSON()).toMatchSnapshot();
  });
});
