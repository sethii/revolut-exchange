import { handleActions } from 'redux-actions';
import * as walletsActionTypes from './wallets.action-types';

export const walletsReducer = handleActions({
  [walletsActionTypes.LOAD_WALLETS_SUCCESS]: (state, action) => action.payload.wallets,
  [walletsActionTypes.ADD_MONEY]: (state, action) => {
    return {
      ...state,
      [action.payload.code]: {
        code: action.payload.code,
        amount: (state[action.payload.code]) ? state[action.payload.code].amount + action.payload.amount : action.payload.amount
      }
    }
  },
  [walletsActionTypes.SUB_MONEY]: (state, action) => {
    return {
      ...state,
      [action.payload.code]: {
        code: action.payload.code,
        amount: state[action.payload.code].amount - action.payload.amount
      }
    }
  }
}, {});
