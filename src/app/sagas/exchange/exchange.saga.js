import { fork, takeEvery, put, select } from 'redux-saga/effects';

import * as appActions from '../../redux/app/app.actions';
import * as exchangeActionTypes from '../../redux/exchange/exchange.action-types';
import * as walletsActions from '../../redux/wallets/wallets.actions';
import * as exchangeActions from '../../redux/exchange/exchange.actions';
import { toUSD } from '../../utils';

export function* exchangeCurrencies(action) {
  const currencies = yield select((state) => state.currencies);
  const fromCurrency = currencies.find((currency) => currency.code === action.payload.fromCurrency);

  const normalizedExchangeAmount = (fromCurrency.code !== 'USD')
    ? toUSD(action.payload.amountFrom, fromCurrency)
    : action.payload.amountFrom;

  yield put(appActions.openModal('in-progress-modal'));
  yield put(exchangeActions.exchangeLimitUpdate(normalizedExchangeAmount));
  yield put(walletsActions.subMoney(action.payload.fromCurrency, action.payload.amountFrom));
  yield put(walletsActions.addMoney(action.payload.toCurrency, action.payload.amountTo));
}

export function* exchangeFinished() {
  yield put(appActions.closeModal());
}

function* takeEveryExchangeCurrencies() {
  yield takeEvery(exchangeActionTypes.EXCHANGE, exchangeCurrencies);
}

function* takeEveryExchangeFinished() {
  yield takeEvery(exchangeActionTypes.EXCHANGE_FINISHED, exchangeFinished);
}

export function* exchangeSaga() {
  yield fork(takeEveryExchangeCurrencies);
  yield fork(takeEveryExchangeFinished);
}
