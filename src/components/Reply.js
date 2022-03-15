import React, { useState, Fragment } from 'react';

import styled from 'styled-components';
import { Card } from './Card';
import replyIcon from '../assets/icon-reply.svg';

import Rating from './Rating/Rating';
import CommentForm from './CommentForm';
import FormArea from './FormArea';

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  figure {
    height: 35px;
    width: 35px;
    margin: 0;
  }
  img {
    display: block;
    max-width: 100%;
    cursor: pointer;
  }
`;

const Actions = styled.div`
  margin-left: auto;
  display: flex;
`;

const CreatedAt = styled.div`
  margin-right: auto;
`;

const Content = styled.div`
  width: 100%;
`;

// Pass the handlers to the form

const Reply = ({ comment, deleteReply, currentUser, addReply, updateReply }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const replyHandler = () => {
    setIsReplying(!isReplying);
  };

  const deleteReplyHandler = () => {
    deleteReply(comment.id);
  };

  const editReplyHandler = () => {
    setIsEditing(!isEditing);
  }

  return (
    <Fragment>
      <Card>
        <Rating score={comment.score} />
        <Content>
          <User>
            <figure>
              <img src={comment.user.image.png} alt='user'/>
            </figure>
            <p>{comment.user.username}</p>
            <CreatedAt>{comment.createdAt}</CreatedAt>
            {currentUser === comment.user.username ? (
              <Actions>
                <div onClick={editReplyHandler}>Edit</div>
                <div onClick={deleteReplyHandler}>Delete</div>
              </Actions>
            ) : null}
            <figure onClick={replyHandler}>
              <img src={replyIcon} alt=''/>
            </figure>
          </User>
          {!isEditing && (
            <p>
              {comment.replyingTo && <strong>@{comment.replyingTo}</strong>}{' '}
              {comment.content}
            </p>
          )}
          {isEditing && (
            <FormArea
              submitLabel="update"
              handleSubmit={updateReply}
              hasCancelButton={true}
              handleCancel={editReplyHandler}
              initialText={comment.content}
              commentId={comment.id}
            />
          )}
        </Content>
      </Card>
      {/* textarea to submit a new reply */}
      {isReplying && (
        <CommentForm
          handleSubmit={addReply}
          submitLabel="reply"
          onClose={replyHandler}
          replyingTo={comment.user.username}
        />
      )}
    </Fragment>
  );
};

export default Reply;
