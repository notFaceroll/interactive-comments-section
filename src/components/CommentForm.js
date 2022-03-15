import React from 'react';

import styled from 'styled-components';
import { Card } from './Card';
import userPicture from '../assets/avatars/image-juliusomo.png';

import FormArea from './FormArea';

const UserProfilePic = styled.picture`
  width: 40px;
  height: 40px;
  img {
    max-width: 100%;
    display: block;
  }
`;

const CommentForm = ({ handleSubmit, submitLabel, onClose, replyingTo }) => {
  return (
    <Card alignment="flex-start">
      <UserProfilePic>
        <img src={userPicture} alt='user'/>
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
