import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import userJul1 from '../../assets/avatars/image-juliusomo.png';
import userJul2 from '../../assets/avatars/image-juliusomo.webp';

import Comment from '../Comment';
import CommentForm from '../CommentForm';
import { userData } from '../../assets/userData';

const comments = userData.comments;
const currentUser = userData.currentUser.username;

const List = styled.ul`
  margin: 2rem auto;
  width: clamp(10rem, 40vw, 800px);
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CreateComment = (text, replyingTo) => {
  return {
    id: Math.random().toString(36).substring(2, 9),
    content: text,
    createdAt: new Date().toLocaleDateString(),
    score: 0,
    replyingTo: replyingTo,
    user: {
      image: {
        png: userJul1,
        webp: userJul2,
      },
      username: 'juliusomo',
    },
    replies: [],
  };
};

const Feed = ({ currentUserId }) => {
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    setCommentsData(comments);
  }, []);

  const getReplies = (comment) => {
    return comment.replies;
  };

  const addComment = (text) => {
    const newComment = CreateComment(text);
    setCommentsData([...commentsData, newComment]);
  };

  const updateComment = (text, id) => {
    const updatedComments = commentsData.map((comment) => {
      if (comment.id === id) {
        return { ...comment, content: text };
      }
      return comment;
    });
    setCommentsData(updatedComments);
  };

  const deleteComment = (commentId) => {
    if (window.confirm('Are you sure that you want to remove this comment?')) {
      const updatedCommentList = commentsData.filter(
        (comment) => comment.id !== commentId
      );
      setCommentsData(updatedCommentList);
    }
  };
  return (
    <List>
      {commentsData.map((comment, index) => (
        <Comment
          key={index}
          comment={comment}
          replies={getReplies(comment)}
          currentUserId={currentUserId}
          deleteComment={deleteComment}
          currentUser={currentUser}
          updateComment={updateComment}
        />
      ))}
      <CommentForm handleSubmit={addComment} submitLabel={'create'} />
    </List>
  );
};

export default Feed;
