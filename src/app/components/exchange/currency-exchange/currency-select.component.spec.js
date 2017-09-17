import React from 'react';
import renderer from 'react-test-renderer';
import { toClass } from 'recompose';
import { mount } from 'enzyme';

import { CurrencySelect } from './currency-select.component';

describe('Currency select component', () => {
  it('renders currency select', () => {
    const onCurrencySelect = jest.fn();
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
    const CurrencySelectComponent = toClass(CurrencySelect);

    expect(renderer.create(<CurrencySelectComponent
      currencies={currencies}
      selectedCurrency={selectedCurrency}
      onCurrencyChange={onCurrencySelect}
    />).toJSON()).toMatchSnapshot();
  });

  it('it changes selected currency', () => {
    const onCurrencySelect = jest.fn();
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
    const CurrencySelectComponent = toClass(CurrencySelect);
    const wrapper = mount(<CurrencySelectComponent
      currencies={currencies}
      selectedCurrency={selectedCurrency}
      onCurrencyChange={onCurrencySelect}
    />);

    wrapper.find('select').simulate('change', { target: { value: 0 } });

    expect(onCurrencySelect).toBeCalledWith(currencies[0]);
  });
});
