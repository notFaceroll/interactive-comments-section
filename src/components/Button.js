import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  /* background-color: hsl(238, 40%, 52%); */
  background-color: ${({ theme }) => theme.colors.primary.modarateBlue};
  color: #fff;
  border-radius: 8px;
  padding: 0.7rem 1.4rem;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all .2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.lightBlue};
  }
`;

const GeneralButton = (props) => {
  return (
    <Button type={props.type} disabled={props.isDisabled}>
      {props.label}
    </Button>
  );
};

export default GeneralButton;
