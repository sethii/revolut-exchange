import { expectSaga } from 'redux-saga-test-plan';
import { exchangeSaga } from './exchange.saga';
import {
  exchangeCurrencyFinished,
  closeModal,
  appReducer,
  openModal,
  exchangeCurrency,
  exchangeLimitUpdate,
  subMoney,
  addMoney
} from '../../redux';

import reducer from '../../app.reducer';

describe('Exchange saga', () => {
  it('exchanges currency', () => {
    const initialState = {
      app: {
        error: null,
        modal: {}
      },
      currencies: [
        {
          code: 'USD',
          exchangeRates: { EUR: 0.5 }
        }
      ],
      wallets: {
        USD: {
          code: 'USD',
          amount: 5000
        }
      },
      exchange: {
        processing: false,
        totalExchanged: 0
      }
    };

    return expectSaga(exchangeSaga)
      .put(openModal('in-progress-modal'))
      .put(exchangeLimitUpdate(2000))
      .put(subMoney('USD', 2000))
      .put(addMoney('EUR', 1000))
      .withReducer(reducer, initialState)
      .hasFinalState({
        ...initialState,
        app: {
          error: null,
          modal: {
            type: 'in-progress-modal'
          }
        },
        wallets: {
          USD: {
            code: 'USD',
            amount: 3000
          },
          EUR: {
            code: 'EUR',
            amount: 1000
          }
        },
        exchange: {
          processing: true,
          totalExchanged: 2000
        }
      })
      .dispatch(exchangeCurrency(2000, 1000, 0, 'USD', 'EUR'))
      .run();
  });

  it('exchanges currency from non-usd', () => {
    const initialState = {
      app: {
        error: null,
        modal: {}
      },
      currencies: [
        {
          code: 'EUR',
          exchangeRates: { USD: 2 }
        },
        {
          code: 'USD',
          exchangeRates: { EUR: 0.5 }
        }
      ],
      wallets: {
        EUR: {
          code: 'EUR',
          amount: 5000
        }
      },
      exchange: {
        processing: false,
        totalExchanged: 0
      }
    };

    return expectSaga(exchangeSaga)
      .put(openModal('in-progress-modal'))
      .put(exchangeLimitUpdate(4000))
      .put(subMoney('EUR', 2000))
      .put(addMoney('USD', 4000))
      .withReducer(reducer, initialState)
      .hasFinalState({
        ...initialState,
        app: {
          error: null,
          modal: {
            type: 'in-progress-modal'
          }
        },
        wallets: {
          EUR: {
            code: 'EUR',
            amount: 3000
          },
          USD: {
            code: 'USD',
            amount: 4000
          }
        },
        exchange: {
          processing: true,
          totalExchanged: 4000
        }
      })
      .dispatch(exchangeCurrency(2000, 4000, 0, 'EUR', 'USD'))
      .run();
  });

  it('finished exchange', () => {
    return expectSaga(exchangeSaga)
      .put(closeModal())
      .withReducer(appReducer, {
        error: null,
        modal: {
          type: 'my-modal'
        }
      })
      .hasFinalState({
        error: null,
        modal: {}
      })
      .dispatch(exchangeCurrencyFinished())
      .run();
  });
});
