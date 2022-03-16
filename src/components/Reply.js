import React, { useState, Fragment } from 'react';

import { Card } from './Card';
import replyIcon from '../assets/icon-reply.svg';
import trashBinIcon from '../assets/icon-delete.svg';
import editIcon from '../assets/icon-edit.svg';

import Rating from './Rating';
import CommentForm from './CommentForm';
import FormArea from './FormArea';
import { Modal } from './Modal';

import { User, Actions, CreatedAt, Content } from './CommentBaseElements';

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
        {!isEditing && <Rating score={comment.score} />}
        {!isEditing && <User>
          <figure>
            <img src={comment.user.image.png} alt="user" />
          </figure>
          <p>{comment.user.username}</p>
          <CreatedAt>{comment.createdAt}</CreatedAt>
        </User>}
        {currentUser === comment.user.username && !isEditing && (
          <Actions>
            <button onClick={editReplyHandler} className="user-actions">
              <img src={editIcon} alt="" />
              Edit
            </button>
            <button onClick={toggleModal} className="user-actions">
              <img src={trashBinIcon} alt="" /> Delete
            </button>
          </Actions>
        ) } 
        {currentUser !== comment.user.username &&
          (<Actions>
            <button onClick={replyHandler} className="user-actions">
              <img src={replyIcon} alt="" /> Reply
            </button>
          </Actions>
        )}

        {!isEditing && (
          <Content>
            <p>
              {comment.replyingTo && <strong>@{comment.replyingTo}</strong>}{' '}
              {comment.content}
            </p>
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
            isEditing={isEditing}
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
