import { walletsReducer } from './wallets.reducer';
import * as actions from './wallets.actions';

describe('Wallets reducer', () => {
  it('returns default state when unsupported action given', () => {
    expect(
      walletsReducer(undefined, { type: 'UNSUPPORTED_ACTION'})
    ).toEqual({});
  });

  it('handles load wallets success action', () => {
    expect(
      walletsReducer(undefined, actions.loadWalletsSuccess({
        USD: {
          code: 'USD',
          amount: 5000
        }
      })
    )).toEqual({
      USD: {
        code: 'USD',
        amount: 5000
      }
    });
  });

  it('handles add money action for existing wallet', () => {
    expect(
      walletsReducer({
        USD: {
          code: 'USD',
          amount: 10
        }
      }, actions.addMoney('USD', 100))
    ).toEqual({
      USD: {
        code: 'USD',
        amount: 110
      }
    });
  });

  it('handles add money action for not existing wallet', () => {
    expect(
      walletsReducer(undefined, actions.addMoney('USD', 100))
    ).toEqual({
      USD: {
        code: 'USD',
        amount: 100
      }
    });
  });

  it('handles sub money action', () => {
    expect(
      walletsReducer({
        USD: {
          code: 'USD',
          amount: 200
        }
      }, actions.subMoney('USD', 100))
    ).toEqual({
      USD: {
        code: 'USD',
        amount: 100
      }
    });
  });
});
