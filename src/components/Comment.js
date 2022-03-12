import React, { useState, Fragment } from 'react';

import styled from 'styled-components';
import { Card } from './Card';
import replyIcon from '../assets/icon-reply.svg';

import Rating from './Rating/Rating';
import Reply from './Reply';
import CommentForm from './CommentForm';
import { CreateComment } from './Feed';

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

const Comment = ({
  comment,
  replies,
  currentUserId,
  deleteComment,
  currentUser,
}) => {
  const [repliesList, setRepliesList] = useState(replies);
  const [isReplying, setIsReplying] = useState(false);

  const replyHandler = () => {
    setIsReplying(!isReplying);
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
      {
        const updatedRepliesList = repliesList.filter(
          (reply) => reply.id !== replyId
        );
        setRepliesList(updatedRepliesList);
      }
    }
  };

  return (
    <Fragment>
      <Card>
        <Rating score={comment.score} />
        <Content>
          <User>
            <figure>
              <img src={comment.user.image.png} />
            </figure>
            <p>{comment.user.username}</p>
            <CreatedAt>{comment.createdAt}</CreatedAt>
            {currentUser == comment.user.username ? (
              <Actions>
                <div>Edit</div>
                <div onClick={deleteCommentHandler}>Delete</div>
              </Actions>
            ) : null}
            <figure onClick={replyHandler}>
              <img src={replyIcon} />
            </figure>
          </User>
          <p>{comment.content}</p>
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
      {/* if it already has a reply, render it */}
      {repliesList.length > 0 && (
        <ul>
          {repliesList.map((item) => (
            <Reply
              key={item.id}
              comment={item}
              replies={[]}
              deleteReply={deleteReply}
              addReply={addReply}
              currentUser={currentUser}
            />
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default Comment;
