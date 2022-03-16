import styled from 'styled-components';

export const User = styled.div`
  grid-row: 1 / 1;
  grid-column: 2 / 6;
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    color: hsl(212, 24%, 26%);
    font-weight: 500;
  }

  figure {
    height: 35px;
    width: 35px;
    margin: 0;
  }
  img {
    display: block;
    max-width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.colors.primary.modarateBlue};
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    grid-row: 1 / 1;
    grid-column: 1 / -1;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
  grid-column: 7 / -1;
  grid-row: 1/ 2;
  justify-self: end;

  @media screen and (max-width: 500px) {
    grid-column: 7 / -1;
    grid-row: 3/ 4;
  }
`;

export const CreatedAt = styled.div`
  margin-right: auto;
  color: hsl(211, 10%, 45%);
`;

export const Content = styled.div`
  grid-column: 2 / -1;
  grid-row: 2 / -1;
  p {
    color: ${(props) => props.theme.colors.neutral.lightGray};
    margin: 0 0 10px;
  }

  strong {
    color: ${({ theme }) => theme.colors.primary.modarateBlue};
  }

  @media screen and (max-width: 500px) {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
  }
`;

export const List = styled.ul`
  border-left: 2px solid hsl(239, 57%, 85%);
  margin-left: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 600px) {
    margin-left: 0;
    padding-left: 1rem;
  }
`;
