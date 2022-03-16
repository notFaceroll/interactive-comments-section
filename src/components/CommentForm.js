import React from 'react';

import styled from 'styled-components';
import { Card } from './Card';
import userPicture from '../assets/avatars/image-juliusomo.png';

import FormArea from './FormArea';

const UserProfilePic = styled.picture`
  width: 40px;
  height: 40px;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  justify-self: center;
  align-self: start;
  img {
    max-width: 100%;
    display: block;
  }

  @media screen and (max-width: 500px) {
    
  }
`;

const CommentForm = ({ handleSubmit, submitLabel, onClose, replyingTo }) => {
  return (
    <Card alignment="flex-start">
      <UserProfilePic>
        <img src={userPicture} alt="user" />
      </UserProfilePic>
      <FormArea
        handleSubmit={handleSubmit}
        submitLabel={submitLabel}
        onClose={onClose}
        replyingTo={replyingTo}
      />
    </Card>
  );
};

export default CommentForm;
