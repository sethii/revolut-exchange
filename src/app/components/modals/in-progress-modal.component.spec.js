import React from 'react';
import renderer from 'react-test-renderer';
import { toClass } from 'recompose';
import { mount } from 'enzyme';

import { exchangeCurrencyFinished } from '../../redux';
import { InProgressModal } from './in-progress-modal.component';

describe('In progress modal component', () => {
  it('renders in progress modal', () => {
    const InProgressModalComponent = toClass(InProgressModal);
    const fakeStore = {
      getState: () => {},
      dispatch: () => jest.fn(),
      subscribe: () => jest.fn()
    };

    expect(renderer.create(<InProgressModalComponent display={true} store={fakeStore}/>).toJSON()).toMatchSnapshot();
  });

  it('renders null when display false passed', () => {
    const InProgressModalComponent = toClass(InProgressModal);
    const fakeStore = {
      getState: () => {},
      dispatch: () => jest.fn(),
      subscribe: () => jest.fn()
    };

    expect(renderer.create(<InProgressModalComponent display={false} store={fakeStore}/>).toJSON()).toMatchSnapshot();
  });

  it('handles done click', () => {
    const InProgressModalComponent = toClass(InProgressModal);
    const fakeStore = {
      getState: () => {},
      dispatch: jest.fn(),
      subscribe: () => jest.fn()
    };

    const wrapper = mount(<InProgressModalComponent display={true} store={fakeStore}/>);

    wrapper.find('button').simulate('click');

    expect(fakeStore.dispatch).toBeCalledWith(exchangeCurrencyFinished());
  });
});
