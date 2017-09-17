import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Header, Link } from './modal.component';

import { branch, renderNothing, setPropTypes, compose } from 'recompose';

const enhance = compose(
  setPropTypes({
    display: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired
  }),
  branch(
    ({ display }) => !display,
    renderNothing
  )
);

export const ExchangeFeeModal = enhance(({ closeModal }) => <Modal>
  <Header>FX exchange limit fee</Header>
  <p>You've reached FX rate limit of $6000 per month. Future exchange will proceed with 0,5% fee.</p>

  <Link onClick={closeModal}>GOT IT</Link>
</Modal>);
