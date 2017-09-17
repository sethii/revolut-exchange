import { expectSaga } from 'redux-saga-test-plan';
import { currenciesSaga} from './currencies.saga';
import * as currenciesActionTypes from '../../redux/currencies/currencies.action-types';
import { fetchCurrencies  } from '../../redux';

describe('Currencies saga', () => {
  let originalTimeout;

  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
  });

  it('loads currencies every 10 seconds', () => {
    return expectSaga(currenciesSaga)
      .put.actionType(currenciesActionTypes.FETCH_CURRENCIES_SUCCESS)
      .put.actionType(currenciesActionTypes.FETCH_CURRENCIES)
      .put.actionType(currenciesActionTypes.FETCH_CURRENCIES_SUCCESS)
      .dispatch(fetchCurrencies())
      .run(12000);
  });

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
});
