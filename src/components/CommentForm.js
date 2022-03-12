import React, { useState } from 'react';

import styled from 'styled-components';
import { Card } from './Card';
import userPicture from '../assets/avatars/image-juliusomo.png';

import GeneralButton from './Button/Button';

const UserProfilePic = styled.picture`
  width: 40px;
  height: 40px;
  img {
    max-width: 100%;
    display: block;
  }
`;

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
const CommentForm = ({ handleSubmit, submitLabel, onClose, replyingTo }) => {
  const [text, setText] = useState('');

  const textInputHandler = (event) => {
    setText(event.target.value);
  };

  const isDisabled = text.length === 0;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    handleSubmit(text, replyingTo);
    setText('');

    if (onClose) {
      onClose();
    }
  };

  return (
    <Card alignment="flex-start">
      <UserProfilePic>
        <img src={userPicture} />
      </UserProfilePic>
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
      </Form>
    </Card>
  );
};

export default CommentForm;
