import React from 'react';

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
  padding: .5rem;
`;

const Reply = (props) => {
  return (
    <Card alignment='flex-start'>
      <UserProfilePic>
        <img src={userPicture} />
      </UserProfilePic>
      <Form>
        <TextArea placeholder="Add a comment..."></TextArea>
        <GeneralButton type='submit' label={props.label ? props.label : 'reply'} />
      </Form>
    </Card>
  );
};

export default Reply;
