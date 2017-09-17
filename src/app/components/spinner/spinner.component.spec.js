import React from 'react';
import renderer from 'react-test-renderer';
import { toClass } from 'recompose';

import { Spinner } from './spinner.component';

describe('Spinner component', () => {
  it('renders spinner', () => {
    const SpinnerComponent = toClass(Spinner);
    expect(renderer.create(
      <SpinnerComponent/>
    ).toJSON()).toMatchSnapshot();
  });
});
