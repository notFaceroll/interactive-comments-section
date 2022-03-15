import React from 'react';
import styled from 'styled-components';

export const Card = styled.li`
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  display: flex;
  align-items: ${(props) => (props.alignment ? props.alignment : 'center')};
  padding: 1rem;
  gap: 1rem;

  p {
    color: hsl(211, 10%, 45%);
    line-height: 1.25;
  }

  strong {
    color: blue;
  }
`;

// const Card = (props) => {
//   return <CardWrapper>{props.children}</CardWrapper>;
// };

// export default Card;
