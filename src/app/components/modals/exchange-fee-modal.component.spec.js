import React from 'react';
import renderer from 'react-test-renderer';
import { toClass } from 'recompose';
import { mount } from 'enzyme';

import { ExchangeFeeModal } from './exchange-fee-modal.component';

describe('Exchange fee modal component', () => {
  it('renders exchange fee modal', () => {
    const ExchangeFeeModalComponent = toClass(ExchangeFeeModal);

    expect(renderer.create(<ExchangeFeeModalComponent display={true} closeModal={jest.fn()}/>).toJSON()).toMatchSnapshot();
  });

  it('renders null when display false passed', () => {
    const ExchangeFeeModalComponent = toClass(ExchangeFeeModal);

    expect(renderer.create(<ExchangeFeeModalComponent display={false} closeModal={jest.fn()}/>).toJSON()).toMatchSnapshot();
  });

  it('handles modal close click', () => {
    const ExchangeFeeModalComponent = toClass(ExchangeFeeModal);
    const closeModal = jest.fn();

    const wrapper = mount(<ExchangeFeeModalComponent display={true} closeModal={closeModal}/>);

    wrapper.find('a').simulate('click');

    expect(closeModal).toBeCalled();
  });
});
