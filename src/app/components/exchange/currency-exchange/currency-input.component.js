import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { compose, setPropTypes, withHandlers } from 'recompose';
import { numberFormatter, prefixedNumberFormatter } from '../../../utils';

const handleSupportedKeys = (event, currentValue) => {
  if (event.keyCode === 8) {
    if (currentValue.toString().length === 0) {
      return currentValue
    }

    return numberFormatter(currentValue.toString().substr(0, currentValue.toString().length - 1))
  }

  return numberFormatter(currentValue + event.key);
};

const enhance = compose(
  withHandlers({
    onKeyDown: (props) => event => {
      const isValidCharacter = /[\d.,]/.test(event.key);
      const isSecondDot = (event.key === '.' || event.key === ',') && /[.,]/.test(props.amount);
      const isOnlyDot = (event.key === '.' || event.key === ',') && props.amount.length === 0;

      if ((!isValidCharacter || isSecondDot || isOnlyDot) && event.keyCode !== 8) {
        event.preventDefault();
      } else {
        const currentValue = handleSupportedKeys(event, props.amount);
        props.onChange(currentValue);
      }
    }
  }),
  setPropTypes({
    amount: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    prefix: PropTypes.string.isRequired,
    onKeyDown: PropTypes.func.isRequired
  })
);

const TextInput = styled.input`
  outline: none;
  border: none;
  padding: 10px 0px;
  font-size: 20px;
  text-align: right;
  user-select: none;
  background-color: transparent;
  
  & ::selection {
    background: transparent;
  }
`;

export const CurrencyInput = enhance(({ amount, prefix, onKeyDown }) => <TextInput
  type="text"
  value={prefixedNumberFormatter(amount, prefix)}
  placeholder="0"
  onKeyDown={onKeyDown}
  onChange={() => {}}
/>);
