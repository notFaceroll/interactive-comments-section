import React, { useState } from 'react';

import styled from 'styled-components';
import GeneralButton from './Button/Button';

const Form = styled.form`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  min-height: 70px;
  border-radius: 5px;
  padding: 0.5rem;
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
      <GeneralButton
        type="submit"
        label={submitLabel}
        isDisabled={isDisabled}
      />
      {hasCancelButton && (
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </Form>
  );
};

export default FormArea;
