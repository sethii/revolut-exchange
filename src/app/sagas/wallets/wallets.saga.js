import { fork, takeEvery, put, call } from 'redux-saga/effects';
import { apiService } from '../../service/fake-api.service';

import * as appActions from '../../redux/app/app.actions';
import * as walletsActionTypes from '../../redux/wallets/wallets.action-types';
import * as walletsActions from '../../redux/wallets/wallets.actions';

function* loadWallets() {
  const result = yield call(apiService.loadWallets);

  if (result.error) {
    yield put(appActions.displayError(result.content));
  } else {
    yield put(walletsActions.loadWalletsSuccess(result));
  }
}

function* takeEveryLoadWallets() {
  yield takeEvery(walletsActionTypes.LOAD_WALLETS, loadWallets);
}

export function* walletsSaga() {
  yield fork(takeEveryLoadWallets);
}
