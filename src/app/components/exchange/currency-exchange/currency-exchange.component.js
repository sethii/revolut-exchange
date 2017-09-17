import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { setPropTypes, compose, defaultProps } from 'recompose';
import { ExchangeFee } from '../exchange-fee/exchange-fee.component';
import { CurrencySelect } from './currency-select.component';
import { CurrencyBalance } from './currency-balance.component';
import { CurrencyInput } from './currency-input.component';

const enhance = compose(
  setPropTypes({
    amount: PropTypes.string.isRequired,
    currencies: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string.isRequired
      })
    ).isRequired,
    selectedCurrency: PropTypes.shape({
        code: PropTypes.string.isRequired
      }).isRequired,
    onCurrencyChange: PropTypes.func.isRequired,
    onAmountChange: PropTypes.func.isRequired,
    wallet: PropTypes.shape({
      code: PropTypes.string.isRequired
    }),
    prefix: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['from', 'to']).isRequired,
    fee: PropTypes.number,
    openFeeInfo: PropTypes.func,
    noBalance: PropTypes.bool
  }),
  defaultProps({
    noBalance: false,
    fee: 0
  })
);

const Container = styled.div`
  width: 600px;
  display: flex;
  margin: 0 auto;
  align-self: ${(props) => props.type === 'from' ? 'flex-end' : 'flex-start'};
  padding: 20px 0px;
`;

const Column = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.position === 'end' ? 'flex-end' : 'flex-start'};
`;

export const CurrencyExchange = enhance((props) => {
  return <Container type={props.type}>
    <Column position={'start'}>
      <CurrencySelect currencies={props.currencies} selectedCurrency={props.selectedCurrency} onCurrencyChange={props.onCurrencyChange} />
      <CurrencyBalance noBalance={props.noBalance} wallet={props.wallet}/>
    </Column>
    <Column position={'end'}>
      <CurrencyInput amount={props.amount} prefix={props.prefix} onChange={props.onAmountChange}/>
      { props.type === 'to' && <ExchangeFee
        fee={props.fee}
        currency={props.selectedCurrency}
        openFeeInfo={props.openFeeInfo}
      />}
    </Column>
  </Container>
});
