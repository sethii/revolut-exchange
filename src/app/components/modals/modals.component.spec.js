import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { toClass } from 'recompose';

import { Modals } from './modals.component';

describe('Modals component', () => {
  it('renders in modals component', () => {
    const ModalsComponent = toClass(Modals);
    const fakeStore = {
      getState: () => ({
        app: {
          modal: {
            type: 'some-modal'
          }
        }
      }),
      dispatch: () => jest.fn(),
      subscribe: () => jest.fn()
    };

    expect(renderer.create(<Provider store={fakeStore}><ModalsComponent/></Provider>).toJSON()).toMatchSnapshot();
  });

  it('renders null when display false passed', () => {
    const ModalsComponent = toClass(Modals);
    const fakeStore = {
      getState: () => ({
        app: {
          modal: {}
        }
      }),
      dispatch: () => jest.fn(),
      subscribe: () => jest.fn()
    };

    expect(renderer.create(<Provider store={fakeStore}><ModalsComponent/></Provider>).toJSON()).toMatchSnapshot();
  });

  it('renders in progress modal modal when in-progress-modal type given', () => {
    const ModalsComponent = toClass(Modals);
    const fakeStore = {
      getState: () => ({
        app: {
          modal: {
            type: 'in-progress-modal'
          }
        }
      }),
      dispatch: () => jest.fn(),
      subscribe: () => jest.fn()
    };

    expect(renderer.create(<Provider store={fakeStore}><ModalsComponent/></Provider>).toJSON()).toMatchSnapshot();
  });

  it('renders exchange fee modal modal when exchange-fee-modal type given', () => {
    const ModalsComponent = toClass(Modals);
    const fakeStore = {
      getState: () => ({
        app: {
          modal: {
            type: 'exchange-fee-modal'
          }
        }
      }),
      dispatch: () => jest.fn(),
      subscribe: () => jest.fn()
    };

    expect(renderer.create(<Provider store={fakeStore}><ModalsComponent/></Provider>).toJSON()).toMatchSnapshot();
  });
});
