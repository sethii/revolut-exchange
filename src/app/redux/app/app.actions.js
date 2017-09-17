import { createAction } from 'redux-actions';
import * as appActionTypes from './app.action-types';

export const displayError = createAction(appActionTypes.APP_ERROR, (error) => ({ error }));
export const openModal = createAction(appActionTypes.OPEN_MODAL, (type) => ({ type }));
export const closeModal = createAction(appActionTypes.CLOSE_MODAL);
