import React, { useState, Fragment } from 'react';

import { Card } from './Card';
import { Modal } from './Modal';
import { CreateComment } from './Feed';

import Reply from './Reply';
import Rating from './Rating';
import FormArea from './FormArea';
import CommentForm from './CommentForm';

import editIcon from '../assets/icon-edit.svg';
import replyIcon from '../assets/icon-reply.svg';
import trashBinIcon from '../assets/icon-delete.svg';

import { User, Actions, CreatedAt, Content, List } from './CommentBaseElements';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Comment = ({
  comment,
  replies,
  currentUserId,
  deleteComment,
  currentUser,
  updateComment,
}) => {
  const [repliesList, setRepliesList] = useState(replies);
  const [localReplies, setLocalReplies] = useLocalStorage('replies', replies);

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

  const deleteCommentHandler = () => {
    deleteComment(comment.id);
  };

  const addReply = (text, replyingTo) => {
    const newReply = CreateComment(text, replyingTo);
    setRepliesList([...repliesList, newReply]);
    // setLocalReplies([...localReplies, newReply]);
  };

  const updateReply = (text, id) => {
    const updatedReplies = repliesList.map((reply) => {
      if (reply.id === id) {
        return { ...reply, content: text };
      }
      return reply;
    });

    setRepliesList(updatedReplies);
    // setLocalReplies(updatedReplies);
  };

  const deleteReply = (replyId) => {
    const updatedRepliesList = repliesList.filter(
      (reply) => reply.id !== replyId
    );
    setRepliesList(updatedRepliesList);
    // setLocalReplies(updatedRepliesList);
  };

  return (
    <Fragment>
      {showModal && (
        <Modal delete={deleteCommentHandler} toggle={toggleModal} />
      )}

      <Card>
        {!isEditing && <Rating score={comment.score} />}
        {!isEditing && (
          <User>
            <figure>
              <img src={comment.user.image.png} alt="user profile" />
            </figure>
            <p>{comment.user.username}</p>
            <CreatedAt>{comment.createdAt}</CreatedAt>
          </User>
        )}
        {currentUser === comment.user.username && !isEditing && (
          <Actions>
            <button onClick={editCommentHandler} className="user-actions">
              <img src={editIcon} alt="" />
              Edit
            </button>
            <button onClick={toggleModal} className="user-actions">
              <img src={trashBinIcon} alt="" /> Delete
            </button>
          </Actions>
        )}
        {currentUser !== comment.user.username && (
          <Actions>
            <button onClick={replyHandler} className="user-actions">
              <img src={replyIcon} alt="" /> Reply
            </button>
          </Actions>
        )}

        {!isEditing && (
          <Content>
            <p>{comment.content}</p>
          </Content>
        )}

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
