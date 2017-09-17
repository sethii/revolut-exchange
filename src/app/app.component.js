import React from 'react';
import styled from 'react-emotion';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { Modals } from './components/modals/modals.component';
import { compose, lifecycle } from 'recompose';
import { withSpinnerWhileLoading } from './components/spinner/spinner.component';
import { withWallets } from './enhancer/with-wallets.enhancer';
import { withCurrencies } from './enhancer/with-currencies.enhancer';

const enhance = compose(
  withWallets,
  withCurrencies,
  lifecycle({
    componentDidMount() {
      this.props.loadWallets();
      this.props.fetchCurrencies();
    }
  }),
  withSpinnerWhileLoading(({ wallets, currencies }) =>  Object.keys(wallets).length === 0 || currencies.length === 0),
);

const Background = styled.div`
  background-color: #048bf2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
`;

export const AppComponent = enhance(() => <Background>
  <ExchangeComponent/>
  <Modals/>
</Background>);
