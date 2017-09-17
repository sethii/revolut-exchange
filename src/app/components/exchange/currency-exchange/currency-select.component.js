import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { setPropTypes } from 'recompose';

const Select = styled.select`
  height: 43px;
  width: 80px;
  outline: none;
`;

const enhance = setPropTypes({
  currencies: PropTypes.array.isRequired,
  selectedCurrency: PropTypes.shape({
    code: PropTypes.string.isRequired,
  }).isRequired,
  onCurrencyChange: PropTypes.func.isRequired
});

export const CurrencySelect = enhance(({ currencies, selectedCurrency, onCurrencyChange}) => <Select
  value={currencies.findIndex((currency) => currency.code === selectedCurrency.code)}
  onChange={(event) => onCurrencyChange(currencies[event.target.value])}
>
    { currencies.map((currency, index) => <option key={index} value={index}>{currency.code}</option>) }
</Select>);
