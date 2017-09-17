import React from 'react';
import renderer from 'react-test-renderer';
import { toClass } from 'recompose';

import { CurrencyBalance } from './currency-balance.component';

describe('Currency balance component', () => {
  it('renders currency balance', () => {
    const CurrencyBalanceComponent = toClass(CurrencyBalance);

    const wallet = {
      code: 'USD',
      amount: 4567
    };

    expect(renderer.create(<CurrencyBalanceComponent noBalance={true} wallet={wallet}/>).toJSON()).toMatchSnapshot();
  });

  it('renders currency balance when not enough money available', () => {
    const CurrencyBalanceComponent = toClass(CurrencyBalance);

    const wallet = {
      code: 'USD',
      amount: 4567
    };

    expect(renderer.create(<CurrencyBalanceComponent noBalance={false} wallet={wallet}/>).toJSON()).toMatchSnapshot();
  });
});
