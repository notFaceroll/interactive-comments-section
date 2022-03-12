import React, { useState, Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { Card } from './Card';

import userProfilePic from '../assets/avatars/image-amyrobson.png';
import replyIcon from '../assets/icon-reply.svg';
import Rating from './Rating/Rating';
import NewReply from './NewReply';
import RepliesList from './RepliesList';

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

  div {
    margin-right: auto;
  }
`;

const Comment = ({ comment, replies }) => {
  // const { content, createdAt, id, score, username, replies } = comment;

  const [isReplying, setIsReplying] = useState(false);
  // const [repliesList, setRepliesList] = useState(replies);

  const replyHandler = () => {
    setIsReplying(!isReplying);
  };

  // const updateReplies = (newReply) => {
  //   console.log('updated');
  //   setRepliesList(old => [...old, newReply]);
  //   setIsReplying(!isReplying);
  // };


  console.log(comment);
  console.log(replies.replies);

  return (
    <Fragment>
      <Card>
        <Rating score={comment.score} />
        <div>
          <User>
            <figure><img src={comment.user.image.png} /></figure>
            <p>{comment.username}</p>
            <div>{comment.createdAt}</div>
            <figure onClick={replyHandler}>
              <img src={replyIcon} />
            </figure>
          </User>
          <p>
            {/*props.replyingTo && <strong>@{props.replyingTo}</strong>*/}{' '}
            {comment.content}
          </p>
        </div>
      </Card>
      {/* textarea to submit a new reply */}
      {/* {isReplying && (
        <NewReply onAddReply={'updateReplies'} replyingTo={username} id={id} />
      )} */}
      {/* if it already has a reply, render it */}
      {replies.length > 0 && (
        <ul>
          {replies.map((item) => (
            <Comment key={item.id} comment={item} replies={[]} />
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default Comment;
