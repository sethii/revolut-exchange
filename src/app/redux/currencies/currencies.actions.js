import { createAction } from 'redux-actions';
import * as currenciesActionTypes from './currencies.action-types';

export const fetchCurrencies = createAction(currenciesActionTypes.FETCH_CURRENCIES);
export const fetchCurrenciesSuccess = createAction(
  currenciesActionTypes.FETCH_CURRENCIES_SUCCESS,
  (currencies) => ({ currencies })
);
