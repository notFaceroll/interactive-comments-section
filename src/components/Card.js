import React from 'react';
import styled from 'styled-components';

export const Card = styled.li`
  background-color: hsl(0, 0, 100%);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  display: flex;
  align-items: ${(props) => (props.alignment ? props.alignment : 'center')};
  padding: 1rem;
  gap: 1rem;

  strong {
    color: blue;
  }
`;

// const Card = (props) => {
//   return <CardWrapper>{props.children}</CardWrapper>;
// };

// export default Card;
