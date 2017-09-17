import * as actions from './exchange.actions';
import * as actionTypes from './exchange.action-types';

describe('Exchange actions', () => {
  it('creates exchange currency action', () => {
    expect(actions.exchangeCurrency(
      5000,
      1000,
      50,
      'USD',
      'EUR'
    )).toEqual({
      type: actionTypes.EXCHANGE,
      payload: {
        amountFrom: 5000,
        amountTo: 1000,
        fee: 50,
        fromCurrency: 'USD',
        toCurrency: 'EUR'
      }
    })
  });

  it('creates exchange currency finished action', () => {
    expect(actions.exchangeCurrencyFinished()).toEqual({
      type: actionTypes.EXCHANGE_FINISHED
    })
  });

  it('creates exchange limit update action', () => {
    expect(actions.exchangeLimitUpdate(5000)).toEqual({
      type: actionTypes.EXCHANGE_LIMIT_UPDATE,
      payload: {
        amount: 5000
      }
    })
  });
});
