import React from 'react';

import { closeModal } from '../../redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { branch, compose, renderNothing, setPropTypes, defaultProps } from 'recompose';

import { ExchangeFeeModal } from './exchange-fee-modal.component';
import { InProgressModal } from './in-progress-modal.component';
import styled from 'react-emotion';

const enhance = compose(
  connect(
    (state) => ({
      display: typeof state.app.modal.type !== 'undefined',
      type: state.app.modal.type
    }),
    (dispatch) => ({
      closeModal: () => dispatch(closeModal())
    })
  ),
  setPropTypes({
    display: PropTypes.bool.isRequired,
    type: PropTypes.string,
    closeModal: PropTypes.func.isRequired
  }),
  defaultProps({
    type: ''
  }),
  branch(
    ({ display }) => !display,
    renderNothing
  )
);

const ModalsBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const Modals = enhance(({ type, closeModal }) => <ModalsBackground>
  <ExchangeFeeModal display={type === 'exchange-fee-modal'} closeModal={closeModal}/>
  <InProgressModal display={type === 'in-progress-modal'}/>
</ModalsBackground>);
