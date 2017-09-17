import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { setPropTypes } from 'recompose';

const Button = styled.button`
  border: none;
  border-radius: 25px;
  color: white;
  background-color: rgba(247, 0, 135, 1);
  width: 600px;
  font-size: 18px;
  padding: 20px 10px;
  
  &:hover {
    cursor: pointer;
  }  
  
  &:disabled {
    background-color: rgba(247, 0, 135, 0.28);
  }
`;

const enhance = setPropTypes({
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
});

export const ExchangeButton = enhance(({ onClick, disabled }) => <Button onClick={onClick} disabled={disabled}>
  Exchange
</Button>);
