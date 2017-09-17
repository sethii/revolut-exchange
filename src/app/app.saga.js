import { fork } from 'redux-saga/effects';
import {
  currenciesSaga,
  walletsSaga,
  exchangeSaga,
} from './sagas';

export default function* appSaga() {
  yield fork(currenciesSaga);
  yield fork(walletsSaga);
  yield fork(exchangeSaga);
}
