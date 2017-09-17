import styled from 'react-emotion';

export const Modal = styled.div`
  border-radius: 10px;
  width: 500px;
  height: auto;
  padding: 20px;
  background-color: white;
  margin: 0 auto;
  font-size: 14px;
`;

export const Header = styled.h1`
  font-size: 24px;
`;

export const Link = styled.a`
  font-size: 16px;
  color: #4169E1;
  
  &:hover {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  border: none;
  font-size: 16px;
  background-color: #4169E1;
  color: white;
  padding: 15px 10px;
  width: 100%;
  border-radius: 25px;
  
  &:hover {
    cursor: pointer;
  }
`;
