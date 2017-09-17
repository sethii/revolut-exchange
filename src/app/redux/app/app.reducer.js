import { handleActions } from 'redux-actions';
import * as appActionTypes from './app.action-types';

export const appReducer = handleActions({
  [appActionTypes.APP_ERROR]: (state, action) => ({
    ...state,
    error: action.payload
  }),
  [appActionTypes.OPEN_MODAL]: (state, action) => ({
    ...state,
    modal: {
      type: action.payload.type
    }
  }),
  [appActionTypes.CLOSE_MODAL]: (state,action) => ({
    ...state,
    modal: {}
  })
}, {
  error: null,
  modal: {}
});
