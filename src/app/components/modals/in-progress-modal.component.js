import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { exchangeCurrencyFinished } from '../../redux';
import { Modal, Header, Button } from './modal.component';
import { branch, renderNothing, setPropTypes, compose } from 'recompose';

const enhance = compose(
  connect(
    null,
    (dispatch) => ({
      done: () => dispatch(exchangeCurrencyFinished())
    })
  ),
  setPropTypes({
    display: PropTypes.bool.isRequired,
    done: PropTypes.func.isRequired
  }),
  branch(
    ({ display }) => !display,
    renderNothing
  )
);

export const InProgressModal = enhance(({ done }) => {
  return (
    <Modal>
      <Header>Exchange finished</Header>
      <Button onClick={() => { done(); }}>Close</Button>
    </Modal>
  )
});

