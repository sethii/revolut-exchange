import { currenciesConfig  } from '../../config/currencies';

import { fork, takeEvery, put, call } from 'redux-saga/effects';
import { fixerIOService } from '../../service/fixer-io.service';
import { delay } from '../../utils';

import * as appActions from '../../redux/app/app.actions';
import * as currenciesActionTypes from '../../redux/currencies/currencies.action-types';
import * as currenciesActions from '../../redux/currencies/currencies.actions';

function* fetchCurrencies() {
  const fetchSupportedCurrencies =  () => Promise.all(
    currenciesConfig.supported.map((currency) => fixerIOService.fetchRates(currency))
  );

  const result = yield call(fetchSupportedCurrencies);

  if (result.error) {
    yield put(appActions.displayError(result.content));
  } else {
    yield put(currenciesActions.fetchCurrenciesSuccess(result));
    yield call(delay, 10000);
    yield put(currenciesActions.fetchCurrencies());
  }
}

function* takeEveryFetchCurrencies() {
  yield takeEvery(currenciesActionTypes.FETCH_CURRENCIES, fetchCurrencies);
}

export function* currenciesSaga() {
  yield fork(takeEveryFetchCurrencies);
}
