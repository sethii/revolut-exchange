import React from 'react';
import styled from 'react-emotion';
import { connect } from 'react-redux';
import { compose, pure, withStateHandlers, branch, renderNothing } from 'recompose';
import { exchangeCurrency, openModal } from '../../redux';
import {
  twoDecimalPlacesFormatter,
  calculateFee,
  calculateReverseFee,
  createEmptyWallet,
  calculateFromAmountByToAmount,
  calculateAmount,
  calculateAmountWithFee
} from '../../utils';
import { withCurrencies } from '../../enhancer/with-currencies.enhancer';
import { withWallets } from '../../enhancer/with-wallets.enhancer';
import { ExchangeRate } from './exchange-rate/exchange-rate.component';
import { ExchangeButton } from './exchange-button/exchange-button.component';
import { CurrencyExchange } from './currency-exchange/currency-exchange.component';

const handleStateUpdate = (state, props, currency, type) => {
  const to = (type === 'from')
    ? currency.code === state.to.code ? state.from : state.to
    : currency;

  const from = (type === 'to')
    ? currency.code === state.from.code ? state.to : state.from
    : currency;

  const fee = calculateFee(Number(state.amountFrom), props.totalExchanged, from, to);

  return ({
    to,
    from,
    fee,
    amountTo: state.amountFrom
      ? calculateAmount(
        state.amountFrom,
        from.exchangeRates[to.code],
        state.fee
      ).toString()
      : state.amountFrom,
    amountFrom: state.amountFrom
  })
};

const enhance = compose(
  connect(
    (state) => ({
      processing: state.exchange.processing,
      totalExchanged: state.exchange.totalExchanged
    }),
    (dispatch) => ({
      exchange: (amountFrom, amountTo, fee, from, to) => dispatch(exchangeCurrency(
        Number(amountFrom),
        Number(amountTo),
        Number(fee),
        from,
        to
      )),
      openFeeInfo: () => dispatch(openModal('exchange-fee-modal'))
    })
  ),
  branch(
    ({ processing }) => processing,
    renderNothing
  ),
  withCurrencies,
  withWallets,
  withStateHandlers(
    ({ currencies }) => ({
      from: currencies[0],
      to: currencies[1],
      amountFrom: '',
      amountTo: '',
      fee: 0
    }),
    {
      changeFromCurrency: (state, props) => currency => handleStateUpdate(state, props, currency, 'from'),
      changeToCurrency: (state, props) => currency => handleStateUpdate(state, props, currency, 'to'),
      changeAmountFrom: (state, props) => amount => {
        state.fee = calculateFee(Number(amount), props.totalExchanged, state.from, state.to);
        state.amountFrom = amount;
        state.amountTo = (state.amountFrom > 0) ? twoDecimalPlacesFormatter(calculateAmount(
          state.amountFrom,
          state.from.exchangeRates[state.to.code],
          state.fee
        )) : ''
      },
      changeAmountTo: (state, props) => amount => {
        state.amountTo = amount;

        const amountFromWithoutFee = (state.amountTo > 0) ? twoDecimalPlacesFormatter(calculateFromAmountByToAmount(
          state.amountTo,
          state.to.exchangeRates[state.from.code]
        )) : '';

        state.fee = calculateReverseFee(Number(amount), props.totalExchanged, state.to);

        state.amountFrom = (state.amountTo > 0) ? twoDecimalPlacesFormatter(
          calculateAmountWithFee(amountFromWithoutFee, Number(state.fee), state.to.exchangeRates[state.from.code])
        ) : '';
      }
    }
  ),
  pure
);

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  width: 100%;
  background-color: ${props => props.type === 'from' ? '#f9fbfc' : '#efefef'};
  display: flex;
  height: 50%;
`;

export const ExchangeComponent = enhance(props => {
  const fromWallet = props.wallets[props.from.code] || createEmptyWallet(props.from.code);
  const toWallet = props.wallets[props.to.code] || createEmptyWallet(props.to.code);
  const exchangeDisabled = fromWallet.amount < props.amountFrom || props.amountTo === 0 || props.amountTo === '';

  return (
    <Container>
      <Section type={'from'}>
        <CurrencyExchange
          currencies={props.currencies}
          amount={props.amountFrom}
          wallet={fromWallet}
          selectedCurrency={props.from}
          onAmountChange={props.changeAmountFrom}
          onCurrencyChange={props.changeFromCurrency}
          prefix={'-'}
          type={'from'}
          noBalance={fromWallet.amount < props.amountFrom }
        />
      </Section>

      <ExchangeRate from={props.from.code} to={props.to.code} rate={props.from.exchangeRates[props.to.code]}/>

      <Section type={'to'}>
        <Container>
          <CurrencyExchange
            currencies={props.currencies}
            wallet={toWallet}
            amount={props.amountTo}
            selectedCurrency={props.to}
            onAmountChange={props.changeAmountTo}
            onCurrencyChange={props.changeToCurrency}
            prefix={'+'}
            type={'to'}
            fee={props.fee}
            openFeeInfo={props.openFeeInfo}
          />

          <ExchangeButton
            disabled={exchangeDisabled}
            onClick={() => props.exchange(
              props.amountFrom,
              props.amountTo,
              props.fee,
              props.from.code,
              props.to.code
            )}
          >Exchange</ExchangeButton>
        </Container>
      </Section>
    </Container>
  );
});
