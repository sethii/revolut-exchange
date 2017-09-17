import { handleActions } from 'redux-actions';
import * as exchangeActionTypes from './exchange.action-types';

export const exchangeReducer = handleActions({
  [exchangeActionTypes.EXCHANGE]: (state, action) => ({
    ...state,
    processing: true
  }),
  [exchangeActionTypes.EXCHANGE_FINISHED]: (state, action) => ({
    ...state,
    processing: false,
  }),
  [exchangeActionTypes.EXCHANGE_LIMIT_UPDATE]: (state, action) => ({
    ...state,
    totalExchanged: state.totalExchanged + action.payload.amount
  })
}, {
  processing: false,
  totalExchanged: 0
});
