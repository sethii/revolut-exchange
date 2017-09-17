import { currenciesReducer } from './currencies.reducer';
import * as actions from './currencies.actions';

describe('Currencies reducer', () => {
  it('returns default state when unsupported action given', () => {
    expect(
      currenciesReducer(undefined, { type: 'UNSUPPORTED_ACTION'})
    ).toEqual([]);
  });

  it('handles currencies success action', () => {
    const currencies = [
      {
        base: 'USD',
        rates:{
          EUR: 0.1234
        }
      }
    ];

    expect(
      currenciesReducer(undefined, actions.fetchCurrenciesSuccess(currencies))
    ).toEqual([
      {
        code: 'USD',
        exchangeRates: currencies[0].rates
      }
    ]);
  });
});
