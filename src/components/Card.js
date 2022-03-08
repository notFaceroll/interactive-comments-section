import React from 'react';
import styled from 'styled-components';

export const Card = styled.li`
  background-color: hsl(0, 0, 100%);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: .5rem;
  gap: 1rem;

  span {
      color: blue;
      font-weight: 700;
  }
`;

// const Card = (props) => {
//   return <CardWrapper>{props.children}</CardWrapper>;
// };

// export default Card;
