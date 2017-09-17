import { exchangeReducer } from './exchange.reducer';
import * as actions from './exchange.actions';

describe('Exchange reducer', () => {
  it('returns default state when unsupported action given', () => {
    expect(
      exchangeReducer(undefined, { type: 'UNSUPPORTED_ACTION'})
    ).toEqual({
      processing: false,
      totalExchanged: 0
    });
  });

  it('handles exchange action', () => {
    expect(
      exchangeReducer(undefined, actions.exchangeCurrency(
        5000,
        1000,
        50,
        'USD',
        'EUR'
      ))
    ).toEqual({
      processing: true,
      totalExchanged: 0
    });
  });

  it('handles exchange limit update action', () => {
    expect(
      exchangeReducer(undefined, actions.exchangeLimitUpdate(5000))
    ).toEqual({
      processing: false,
      totalExchanged: 5000
    });
  });

  it('handles exchange finished action', () => {
    expect(
      exchangeReducer({
        processing: true,
        totalExchanged: 1000
      }, actions.exchangeCurrencyFinished())
    ).toEqual({
      processing: false,
      totalExchanged: 1000
    });
  });
});
