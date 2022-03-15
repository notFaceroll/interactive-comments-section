import React, { useState, Fragment } from 'react';

import styled from 'styled-components';
import { Card } from './Card';
import replyIcon from '../assets/icon-reply.svg';

import Rating from './Rating/Rating';
import Reply from './Reply';
import CommentForm from './CommentForm';
import { CreateComment } from './Feed';
import FormArea from './FormArea';
import { Modal } from './Modal';

import trashBinIcon from '../assets/icon-delete.svg';
import editIcon from '../assets/icon-edit.svg';

const User = styled.div`
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
  color: hsl(211, 10%, 45%);
`;

const Content = styled.div`
  grid-column: 2 / -1;
  grid-row: 2 / -1;
`;

const List = styled.ul`
  border-left: 2px solid hsl(239, 57%, 85%);
  margin-left: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Comment = ({
  comment,
  replies,
  currentUserId,
  deleteComment,
  currentUser,
  updateComment,
}) => {
  const [repliesList, setRepliesList] = useState(replies);
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const replyHandler = () => {
    setIsReplying(!isReplying);
  };

  const editCommentHandler = () => {
    setIsEditing(!isEditing);
  };

  const updateReply = (text, id) => {
    const updatedReplies = repliesList.map((reply) => {
      if (reply.id === id) {
        return { ...reply, content: text };
      }
      return reply;
    });

    setRepliesList(updatedReplies);
  };

  const addReply = (text, replyingTo) => {
    const newReply = CreateComment(text, replyingTo);
    setRepliesList([...repliesList, newReply]);
  };

  const deleteCommentHandler = () => {
    deleteComment(comment.id);
  };

  const deleteReply = (replyId) => {
    const updatedRepliesList = repliesList.filter(
      (reply) => reply.id !== replyId
    );
    setRepliesList(updatedRepliesList);
  };
  return (
    <Fragment>
      {showModal && (
        <Modal delete={deleteCommentHandler} toggle={toggleModal} />
      )}
      <Card>
        <Rating score={comment.score} />
        {/* <Content> */}
        <User>
          <figure>
            <img src={comment.user.image.png} alt="user profile" />
          </figure>
          <p>{comment.user.username}</p>
          <CreatedAt>{comment.createdAt}</CreatedAt>
        </User>
        {currentUser === comment.user.username ? (
          <Actions>
            <button onClick={editCommentHandler} className="user-actions">
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
        {/* <button onClick={replyHandler}>
              <img src={replyIcon} alt="" /> Reply
            </button> */}

        {!isEditing && <Content>{comment.content}</Content>}
        {isEditing && (
          <FormArea
            submitLabel="update"
            handleSubmit={updateComment}
            hasCancelButton={true}
            handleCancel={editCommentHandler}
            initialText={comment.content}
            commentId={comment.id}
            isEditing={isEditing}
          />
        )}
        {/* </Content> */}
      </Card>
      {/* Textarea to submit a new reply */}
      {isReplying && (
        <CommentForm
          handleSubmit={addReply}
          submitLabel="reply"
          onClose={replyHandler}
          replyingTo={comment.user.username}
        />
      )}
      {/* If it already has a reply, render it */}
      {repliesList.length > 0 && (
        <List>
          {repliesList.map((item) => (
            <Reply
              key={item.id}
              comment={item}
              replies={[]}
              deleteReply={deleteReply}
              addReply={addReply}
              currentUser={currentUser}
              updateReply={updateReply}
            />
          ))}
        </List>
      )}
    </Fragment>
  );
};

export default Comment;
