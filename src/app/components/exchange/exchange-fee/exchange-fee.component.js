import React from 'react';
import { branch, renderNothing, setPropTypes, compose } from 'recompose';
import PropTypes from 'prop-types';
import getSymbolFromCurrency from 'currency-symbol-map'
import styled from 'react-emotion';

const enhance = compose(
  setPropTypes({
    fee: PropTypes.number.isRequired,
    currency: PropTypes.shape({
      code: PropTypes.string.isRequired
    }).isRequired,
    openFeeInfo: PropTypes.func.isRequired
  }),
  branch(
    ({ fee }) => fee === 0,
    renderNothing
  )
);

const FeeInfo = styled.p`
  font-size: 12px;
  color: #b1b1b1;
  font-family: Arial;
  
  & span {
    font-size: 10px;
  }
  
  & i:hover {
    cursor:pointer;
  }
`;

export const ExchangeFee = enhance(({fee, currency, openFeeInfo}) => <FeeInfo>
  Inc. fee: <span>{getSymbolFromCurrency(currency.code)}</span>{fee} <i onClick={openFeeInfo} className="fa fa-info-circle" aria-hidden="true"/>
</FeeInfo>);
