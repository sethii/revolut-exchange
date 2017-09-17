import { createAction } from 'redux-actions';
import * as appActionTypes from './wallets.action-types';

export const loadWallets = createAction(appActionTypes.LOAD_WALLETS);
export const loadWalletsSuccess = createAction(appActionTypes.LOAD_WALLETS_SUCCESS, (wallets) => ({wallets}));
export const addMoney = createAction(appActionTypes.ADD_MONEY, (code, amount) => ({code, amount}));
export const subMoney = createAction(appActionTypes.SUB_MONEY, (code, amount) => ({code, amount}));
