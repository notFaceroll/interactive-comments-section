import React, { useState, Fragment } from 'react';

import styled from 'styled-components';
import { Card } from './Card';
import replyIcon from '../assets/icon-reply.svg';
import trashBinIcon from '../assets/icon-delete.svg';
import editIcon from '../assets/icon-edit.svg';

import Rating from './Rating/Rating';
import CommentForm from './CommentForm';
import FormArea from './FormArea';
import { Modal } from './Modal';

const User = styled.div`
  /* display: flex;
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
  } */
  grid-row: 1 / 1;
  grid-column: 2 / 6;
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    color: hsl(212, 24%, 26%);
    font-weight: 500;
  }

  figure {
    height: 35px;
    width: 35px;
    margin: 0;
  }
  img {
    display: block;
    max-width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.colors.primary.modarateBlue};
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
  grid-column: 7 / -1;
  grid-row: 1/ 2;
  justify-self: end;
`;

const CreatedAt = styled.div`
  margin-right: auto;
`;

const Content = styled.div`
  grid-column: 2 / -1;
  grid-row: 2 / -1;
`;

const Reply = ({
  comment,
  deleteReply,
  currentUser,
  addReply,
  updateReply,
}) => {
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const replyHandler = () => {
    setIsReplying(!isReplying);
  };

  const deleteReplyHandler = () => {
    deleteReply(comment.id);
  };

  const editReplyHandler = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Fragment>
      {showModal && <Modal delete={deleteReplyHandler} toggle={toggleModal} />}
      <Card>
        <Rating score={comment.score} />

        <User>
          <figure>
            <img src={comment.user.image.png} alt="user" />
          </figure>
          <p>{comment.user.username}</p>
          <CreatedAt>{comment.createdAt}</CreatedAt>
        </User>
        {currentUser === comment.user.username ? (
          <Actions>
            <button onClick={editReplyHandler} className="user-actions">
              <img src={editIcon} alt="" />
              Edit
            </button>
            <button onClick={toggleModal} className="user-actions">
              <img src={trashBinIcon} alt="" /> Delete
            </button>
          </Actions>
        ) : (
          <Actions>
            <button onClick={replyHandler}>
              <img src={replyIcon} alt="" /> Reply
            </button>
          </Actions>
        )}

        {!isEditing && (
          <Content>
            {comment.replyingTo && <strong>@{comment.replyingTo}</strong>}{' '}
            {comment.content}
          </Content>
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
