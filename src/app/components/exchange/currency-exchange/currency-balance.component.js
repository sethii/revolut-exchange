import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { setPropTypes } from 'recompose';
import getSymbolFromCurrency from 'currency-symbol-map';
import { twoDecimalPlacesFormatter } from '../../../utils';

const enhance = setPropTypes({
  noBalance: PropTypes.bool.isRequired,
  wallet: PropTypes.shape({
    code: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
  }).isRequired
});

const Balance = styled.p`
  font-size: 12px;
  color: ${props => props.noBalance ? 'rgba(247, 0, 135, 1)' : '#b1b1b1'};
  font-family: Arial;
  
  & span {
    font-size: 10px;
  }
`;

export const CurrencyBalance = enhance(({ noBalance, wallet }) => <Balance noBalance={noBalance}>
  Balance: <span>{ getSymbolFromCurrency(wallet.code) }</span>{ twoDecimalPlacesFormatter(wallet.amount)}
</Balance>);
