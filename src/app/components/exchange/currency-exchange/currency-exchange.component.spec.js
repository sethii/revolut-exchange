import React from 'react';
import renderer from 'react-test-renderer';
import { toClass } from 'recompose';

import { CurrencyExchange } from './currency-exchange.component';

describe('Currency exchange component', () => {
  it('renders exchange component for from currency', () => {
    const amount= '1234';
    const wallet = {
      code: 'USD',
      amount: 1000
    };
    const onAmountChange = jest.fn();
    const prefix = "+";
    const onCurrencyChange = jest.fn();
    const currencies = [
      {
        code: 'USD',
      },
      {
        code: 'PLN'
      }
    ];
    const selectedCurrency = {
      code: 'PLN'
    };
    const type = 'from';
    const fee = 50;
    const openFeeInfo = jest.fn();
    const noBalance = false;

    const CurrencyExchangeComponent = toClass(CurrencyExchange);

    expect(renderer.create(<CurrencyExchangeComponent
      amount={amount}
      prefix={prefix}
      wallet={wallet}
      onAmountChange={onAmountChange}
      onCurrencyChange={onCurrencyChange}
      currencies={currencies}
      selectedCurrency={selectedCurrency}
      type={type}
      fee={fee}
      openFeeInfo={openFeeInfo}
      noBalance={noBalance}
    />).toJSON()).toMatchSnapshot();
  });

  it('renders exchange component for to currency', () => {
    const amount= '1234';
    const wallet = {
      code: 'USD',
      amount: 1000
    };
    const onAmountChange = jest.fn();
    const prefix = "+";
    const onCurrencyChange = jest.fn();
    const currencies = [
      {
        code: 'USD',
      },
      {
        code: 'PLN'
      }
    ];
    const selectedCurrency = {
      code: 'PLN'
    };
    const type = 'to';
    const fee = 50;
    const openFeeInfo = jest.fn();
    const noBalance = false;

    const CurrencyExchangeComponent = toClass(CurrencyExchange);

    expect(renderer.create(<CurrencyExchangeComponent
      amount={amount}
      prefix={prefix}
      wallet={wallet}
      onAmountChange={onAmountChange}
      onCurrencyChange={onCurrencyChange}
      currencies={currencies}
      selectedCurrency={selectedCurrency}
      type={type}
      fee={fee}
      openFeeInfo={openFeeInfo}
      noBalance={noBalance}
    />).toJSON()).toMatchSnapshot();
  });
});
