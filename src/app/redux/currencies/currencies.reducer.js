import { handleActions } from 'redux-actions';
import * as currenciesActionTypes from './currencies.action-types';

export const currenciesReducer = handleActions({
  [currenciesActionTypes.FETCH_CURRENCIES_SUCCESS]: (state, action) => action.payload.currencies.map(
    (currency) => ({
      code: currency.base,
      exchangeRates: currency.rates
    })
  )
}, []);
