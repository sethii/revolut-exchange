import * as actions from './currencies.actions';
import * as actionTypes from './currencies.action-types';

describe('Currencies actions', () => {
  it('creates fetch currencies action', () => {
    expect(actions.fetchCurrencies()).toEqual({
      type: actionTypes.FETCH_CURRENCIES
    })
  });

  it('creates fetch currencies success action', () => {
    const currencies = [
      {
        base: 'USD',
        rates: {
          EUR: 0.1234
        }
      }
    ];

    expect(actions.fetchCurrenciesSuccess(currencies)).toEqual({
      type: actionTypes.FETCH_CURRENCIES_SUCCESS,
      payload: {
        currencies
      }
    })
  });
});
