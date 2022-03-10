import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { Card } from './Card';

import userProfilePic from '../assets/avatars/image-amyrobson.png';
import replyIcon from '../assets/icon-reply.svg';
import Rating from './Rating/Rating';
import Reply from './Reply';

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

  return (
    <Fragment>
      <Card>
        <Rating score={props.score} />
        <div>
          <User>
            <figure>
              <img src={`${props.picture}`} />
            </figure>
            <p>{props.username}</p>
            <div>{props.date}</div>
            <figure onClick={replyHandler}>
              <img src={replyIcon} />
            </figure>
          </User>
          <p>
            {props.replyingTo && <strong>@{props.replyingTo}</strong>}{' '}
            {props.content}
          </p>
        </div>
      </Card>
      {isReplying && <Reply />}
    </Fragment>
  );
};

export default Comment;
