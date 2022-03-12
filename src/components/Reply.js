import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { Card } from './Card';

import replyIcon from '../assets/icon-reply.svg';
import Rating from './Rating/Rating';
import NewReply from './NewReply';

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

const Reply = (props) => {
  const [isReplying, setIsReplying] = useState(false);

  const replyHandler = () => {
    setIsReplying(!isReplying);
  };

  const { content, createdAt, id, score, username, replyingTo } = props;

//   console.log(props.id);
//   console.log(replyingTo);

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
          onAddReply={props.newReply}
          replyingTo={username}
          replyBox={replyHandler}
          id={id}
        />
      )}
    </Fragment>
  );
};

export default Reply;
