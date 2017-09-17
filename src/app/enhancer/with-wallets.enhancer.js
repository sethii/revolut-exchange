import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, setPropTypes } from 'recompose';
import { loadWallets } from '../redux';

export const withWallets = compose(
  connect(
    (state) => ({ wallets: state.wallets }),
    (dispatch) => ({ loadWallets: () => dispatch(loadWallets())})
  ),
  setPropTypes({
    wallets: PropTypes.object.isRequired,
    loadWallets: PropTypes.func.isRequired
  })
);
