import React from 'react';
import PropTypes from 'prop-types';
import { setPropTypes, mapProps, compose } from 'recompose';
import getSymbolFromCurrency from 'currency-symbol-map'
import { twoDecimalPlacesFormatter, fourDecimalPlacesFormatter} from '../../../utils';
import styled from 'react-emotion';

const enhance = compose(
  setPropTypes({
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired
  }),
  mapProps((props) => ({
    ...props,
    rate: twoDecimalPlacesFormatter(props.rate),
    lastTwoCharacters: fourDecimalPlacesFormatter(props.rate).substr(-2)
  }))
);

const Paragraph = styled.p`
  font-size: 16px;
  color: #048bf2;
  border-radius: 20px;
  border: 2px solid #efefef;
  position: absolute;
  padding: 5px 20px;
  top: calc(50% - 16px);
  left: calc(50% - 60px);
  margin: 0;
  
  & span {
    font-size: 12px
  }
`;

export const ExchangeRate = enhance(({ from, to, rate, lastTwoCharacters }) => <Paragraph>
  <span>{ getSymbolFromCurrency(from) }</span>1 = <span>{ getSymbolFromCurrency(to) }</span>{ rate }<span>{ lastTwoCharacters }</span>
</Paragraph>);
