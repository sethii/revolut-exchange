import React from 'react';
import styled from 'react-emotion';
import { keyframes, css } from 'emotion';
import {
  compose,
  branch,
  renderComponent,
  withProps
} from 'recompose';

const Background = styled.div`
  background-color: #048bf2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerWrapper = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
`;

const bounce = keyframes`
  0%, 100% { 
    transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
  }
`;

const bounceContainer =  css`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: white;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  
  -webkit-animation: ${bounce} 2.0s infinite ease-in-out;
  animation: ${bounce} 2.0s infinite ease-in-out;
`;

const SpinnerBounce = styled.div`
  composes: ${bounceContainer}
`;

const DelayedSpinnerBounce = styled.div`
  composes: ${bounceContainer};
  animation-delay: -1.0s;
`;

export const Spinner = () => <Background>
  <SpinnerWrapper>
    <SpinnerBounce/>
    <DelayedSpinnerBounce/>
  </SpinnerWrapper>
</Background>;

export const withSpinnerWhileLoading = (checkExpression) => compose(
  withProps(props => ({
    loading: checkExpression(props)
  })),
  branch(
    ({ loading }) => loading,
    renderComponent(Spinner)
  )
);
