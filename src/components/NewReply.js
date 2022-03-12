import React, { useRef, useState } from 'react';

import { Card } from './Card';
import GeneralButton from './Button/Button';
import userPicture from '../assets/avatars/image-juliusomo.png';
import styled from 'styled-components';

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

const NewReply = (props) => {
  const { onAddReply, replyingTo, id, label } = props;

  const userInputRef = useRef();
  // console.log(replyingTo);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    // where to send the input ?
    // userData.comments[id].replies.push ?
    const enteredData = userInputRef.current.value;
    onAddReply({
      id: props.id + 100,
      content: enteredData,
      createdAt: 'Just now',
      score: 0,
      replyingTo: props.replyingTo,
      user: {
        image: {
          png: userPicture,
          webp: userPicture,
        },
        username: 'julisomo',
      },
    });
    if (props.replyBox) {
      props.replyBox();
    }
  };

  const defaultValue = replyingTo ? `@${replyingTo}` : null;

  return (
    <Card alignment="flex-start">
      <UserProfilePic>
        <img src={userPicture} />
      </UserProfilePic>
      <Form onSubmit={formSubmitHandler}>
        <TextArea
          placeholder="Add a comment..."
          ref={userInputRef}
          defaultValue={defaultValue}
        />
        <GeneralButton
          type="submit"
          label={props.label ? props.label : 'reply'}
        />
      </Form>
    </Card>
  );
};

export default NewReply;
