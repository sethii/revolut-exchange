import * as appActions from './app.actions';
import * as appActionTypes from './app.action-types';

describe('App actions', () => {
  it('creates display error action', () => {
    const error = new Error('some error');
    expect(appActions.displayError(error)).toEqual({
      type: appActionTypes.APP_ERROR,
      error: true,
      payload: error
    })
  });

  it('creates open modal action', () => {
    expect(appActions.openModal('my-modal')).toEqual({
      type: appActionTypes.OPEN_MODAL,
      payload: {
        type: 'my-modal'
      }
    })
  });

  it('creates close modal action', () => {
    expect(appActions.closeModal()).toEqual({
      type: appActionTypes.CLOSE_MODAL
    })
  });
});
