import { expectSaga } from 'redux-saga-test-plan';
import { walletsSaga} from './wallets.saga';
import { loadWalletsSuccess, loadWallets } from '../../redux';
import {walletsReducer} from "../../redux/wallets/wallets.reducer";

describe('Wallets saga', () => {
  let originalTimeout;

  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  it('loads wallets', () => {
    return expectSaga(walletsSaga)
      .put(loadWalletsSuccess({
        USD: {
          code: 'USD',
          amount: 50000
        }
      }))
      .withReducer(walletsReducer)
      .hasFinalState({
        USD: {
          code: 'USD',
          amount: 50000
        }
      })
      .dispatch(loadWallets())
      .run(7000);
  });

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
});
