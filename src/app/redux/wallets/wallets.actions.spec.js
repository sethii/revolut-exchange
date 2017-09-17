import * as actions from './wallets.actions';
import * as actionTypes from './wallets.action-types';

describe('Wallets actions', () => {
  it('creates load wallets action', () => {
    expect(actions.loadWallets()).toEqual({
      type: actionTypes.LOAD_WALLETS
    })
  });

  it('creates load wallets success action', () => {
    expect(actions.loadWalletsSuccess({
      USD: {
        code: 'USD',
        amount: 1000
      }
    })).toEqual({
      type: actionTypes.LOAD_WALLETS_SUCCESS,
      payload: {
        wallets: {
          USD: {
            code: 'USD',
            amount: 1000
          }
        }
      }
    })
  });

  it('creates add money action', () => {
    expect(actions.addMoney('USD', 5000)).toEqual({
      type: actionTypes.ADD_MONEY,
      payload: {
        code: 'USD',
        amount: 5000
      }
    })
  });

  it('creates sub money action', () => {
    expect(actions.subMoney('USD', 5000)).toEqual({
      type: actionTypes.SUB_MONEY,
      payload: {
        code: 'USD',
        amount: 5000
      }
    })
  });
});
