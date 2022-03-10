import styled from 'styled-components';

export const ButtonHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: hsl(228, 33%, 97%);
  border-radius: 5px;
  height: 100%;
  padding: 0.5rem;
  font-weight: bold;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: .7rem;
  cursor: pointer;
`;
