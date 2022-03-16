import React, { useState } from 'react';

import styled, { css } from 'styled-components';
import GeneralButton from './Button';

// ${({ isEditing }) =>
//     isEditing &&
//     css`
//       grid-row: ${({ theme }) => theme.gridColumns.editing};
//     `}

const Form = styled.form`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  grid-column: 2 / -1;
  ${({ isEditing }) =>
    isEditing &&
    css`
      grid-row: ${({ theme }) => theme.gridColumns.editing};
    `}

  @media screen and (max-width: 500px) {
    flex-direction: column;
    grid-row: 1 / 3;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  min-height: 70px;
  border-radius: 5px;
  padding: 0.5rem;
  font-family: inherit;
  font-size: inherit;
  box-sizing: border-box;
`;

const Cancel = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  font-size: .8rem;
  color: ${({ theme }) => theme.colors.primary.softRed};
  margin-left: 1rem;
`;

const FormArea = ({
  handleSubmit,
  submitLabel,
  onClose,
  replyingTo,
  initialText = '',
  handleCancel,
  hasCancelButton,
  commentId,
}) => {
  const [text, setText] = useState(initialText);

  const textInputHandler = (event) => {
    setText(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (commentId) {
      handleSubmit(text, commentId);
      setText('');
      handleCancel();
    } else if (!commentId) {
      handleSubmit(text, replyingTo);
      setText('');
    }

    if (onClose) {
      onClose();
    }
  };

  const isDisabled = text.length === 0;
  return (
    <Form onSubmit={formSubmitHandler}>
      <TextArea
        placeholder="Add a comment..."
        onChange={textInputHandler}
        value={text}
      />
      <Container>
        <GeneralButton
          type="submit"
          label={submitLabel}
          isDisabled={isDisabled}
        />
        {hasCancelButton && (
          <Cancel type="button" onClick={handleCancel}>
            Cancel
          </Cancel>
        )}
      </Container>
    </Form>
  );
};

export default FormArea;
