import React, { useState, Fragment } from 'react';

import styled from 'styled-components';
import { Card } from './Card';
import replyIcon from '../assets/icon-reply.svg';

import Rating from './Rating/Rating';
import Reply from './Reply';
import CommentForm from './CommentForm';
import { CreateComment } from './Feed';
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

  /* div {
    margin-right: auto;
  } */
`;

const Actions = styled.div`
  display: flex;
`;

const CreatedAt = styled.div`
  margin-right: auto;
`;

const Content = styled.div`
  width: 100%;
`;

const List = styled.ul`
  border-left: 2px solid hsl(239, 57%, 85%);
  margin-left: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// TODO: Create the updating logic for the reply and reply list

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
    if (window.confirm('Are you sure that you want to remove this reply?')) {
      const updatedRepliesList = repliesList.filter(
        (reply) => reply.id !== replyId
      );
      setRepliesList(updatedRepliesList);
    }
  };
  return (
    <Fragment>
      <Card>
        <Rating score={comment.score} />
        <Content>
          <User>
            <figure>
              <img src={comment.user.image.png} alt="user profile" />
            </figure>
            <p>{comment.user.username}</p>
            <CreatedAt>{comment.createdAt}</CreatedAt>
            {currentUser === comment.user.username ? (
              <Actions>
                <div onClick={editCommentHandler}>Edit</div>
                <div onClick={deleteCommentHandler}>Delete</div>
              </Actions>
            ) : null}
            <figure onClick={replyHandler}>
              <img src={replyIcon} alt="" />
            </figure>
          </User>
          {!isEditing && <p>{comment.content}</p>}
          {isEditing && (
            <FormArea
              submitLabel="update"
              handleSubmit={updateComment}
              hasCancelButton={true}
              handleCancel={editCommentHandler}
              initialText={comment.content}
              commentId={comment.id}
            />
          )}
        </Content>
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
