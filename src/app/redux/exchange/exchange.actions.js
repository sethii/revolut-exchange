import { createAction } from 'redux-actions';
import * as exchangeActionTypes from './exchange.action-types';

export const exchangeCurrency = createAction(exchangeActionTypes.EXCHANGE, (amountFrom, amountTo, fee, fromCurrency, toCurrency) => ({
  amountFrom,
  amountTo,
  fee,
  fromCurrency,
  toCurrency
}));

export const exchangeCurrencyFinished = createAction(exchangeActionTypes.EXCHANGE_FINISHED);

export const exchangeLimitUpdate = createAction(exchangeActionTypes.EXCHANGE_LIMIT_UPDATE, (amount ) => ({ amount }));
