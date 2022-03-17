import styled from 'styled-components';

export const Card = styled.li`
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  padding: 1rem;
  gap: 1rem;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  justify-items: start;
  height: min-content;

  p {
    color: hsl(211, 10%, 45%);
    line-height: 1.25;
  }

  strong {
    color: blue;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(8, 1fr);
  }
`;

// align-items: ${(props) => (props.alignment ? props.alignment : 'center')};
