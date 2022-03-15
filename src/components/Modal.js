import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100%;
  z-index: 90;
  background-color: hsla(0, 0%, 0%, 0.5);
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 100;
  background-color: #fff;
  margin: 0 auto;
  align-items: center;
  padding: 1.75rem;
  border-radius: 10px;
  width: 350px;

  strong {
    font-size: 1.5rem;
    width: 100%;
    color: ${( props ) => props.theme.colors.neutral.darkBlue};
  }

  p {
    color: ${( props ) => props.theme.colors.neutral.grayishBlue};
  }

  button {
    margin: 0 1rem;
    padding: 0.75rem 1.25rem;
    border: 0;
    border-radius: 7px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    cursor: pointer;
    color: #fff;
    background-color: ${( props ) => props.theme.colors.neutral.grayishBlue};
  }

  button + button {
    background-color: ${( props ) => props.theme.colors.primary.softRed};
  }
`;

export const Modal = (props) => {
  return ReactDOM.createPortal(
    <Fragment>
      <Backdrop onClick={props.toggle}>
        <Container>
          <strong>Delete comment</strong>
          <p>
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>
          <div>
            <button onClick={props.toggle}>No, Cancel</button>
            <button onClick={props.delete}>Yes, Delete</button>
          </div>
        </Container>
      </Backdrop>
    </Fragment>,
    document.body
  );
};
