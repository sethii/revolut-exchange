import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  compose,
  setPropTypes,
} from 'recompose';
import { fetchCurrencies } from '../redux';

export const withCurrencies = compose(
  connect(
    (state) => ({ currencies: state.currencies }),
    (dispatch) => ({ fetchCurrencies: () => dispatch(fetchCurrencies())})
  ),
  setPropTypes({
    currencies: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string.isRequired
      })
    ).isRequired,
    fetchCurrencies: PropTypes.func.isRequired
  })
);
