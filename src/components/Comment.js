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

const Comment = (props) => {
  const [isReplying, setIsReplying] = useState(false);

  const replyHandler = () => {
    setIsReplying(!isReplying);
  };

  const { content, date: createdAt, replies, id, score, username } = props;

  const [repliesList, setRepliesList] = useState(replies);

  console.log(repliesList.length);

  // const updateReplies = (newReply) => {
  //   console.log(newReply);
  //   setRepliesList((oldList) => [...oldList, newReply]);
  //   setIsReplying(!isReplying);
  // };

  return (
    <Fragment>
      <Card>
        <Rating score={score} />
        <div>
          <User>
            <figure>
              <img src={props.picture} />
            </figure>
            <p>{username}</p>
            <div>{createdAt}</div>
            <figure onClick={replyHandler}>
              <img src={replyIcon} />
            </figure>
          </User>
          <p>
            {props.replyingTo && <strong>@{props.replyingTo}</strong>} {content}
          </p>
        </div>
      </Card>
      {/* textarea to submit a new reply */}
      {isReplying && (
        <NewReply
          onAddReply={console.log('added')}
          replyingTo={username}
          id={id}
        />
      )}
      {/* if it already has a reply, render it */}
      {repliesList.length > 0 && (
        <RepliesList replies={repliesList} />
      )}
    </Fragment>
  );
};

export default Comment;
