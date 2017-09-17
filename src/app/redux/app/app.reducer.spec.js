import { appReducer } from './app.reducer';
import * as appActions from './app.actions';

describe('App reducer', () => {
  it('returns default state when unsupported action given', () => {
    expect(
      appReducer(undefined, { type: 'UNSUPPORTED_ACTION'})
    ).toEqual({
      error: null,
      modal: {}
    });
  });

  it('handles open modal action', () => {
    expect(
      appReducer(undefined, appActions.openModal('my-modal'))
    ).toEqual({
      error: null,
      modal: {
        type: 'my-modal'
      }
    });
  });

  it('handles close modal action', () => {
    expect(
      appReducer({
        error: null,
        modal: {
          type: 'my-modal'
        }
      }, appActions.closeModal())
    ).toEqual({
      error: null,
      modal: {}
    });
  });

  it('handles app error action', () => {
    const error = new Error('my-error');

    expect(appReducer(undefined, appActions.displayError(error))).toEqual({
      error: error,
      modal: {}
    });
  });
});
