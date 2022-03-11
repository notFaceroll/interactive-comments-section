import React, { useState } from 'react';
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

const List = styled.ul`
  margin: 0 auto;
  width: 93%;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// TODO: Arrumar um jeito de indetificar o card...
// ... que será respondido e renderizar somente uma caixa de resposta


const RepliesList = (props) => {
  console.log(props.replies);
  const [reply, setIsReply] = useState(false);

  const setNewReplyHandler = () => {
    setIsReply(!reply);
  };
  return (
    <List>
      {props.replies.map((item, index) => (
        <>
          <Card key={index}>
            <Rating score={item.score} />
            <div>
              <User>
                <figure>
                  <img src={item.user.image.png} />
                </figure>
                <p>{item.user.username}</p>
                <div>{item.createdAt}</div>
                <figure onClick={setNewReplyHandler}>
                  <img src={replyIcon} />
                </figure>
              </User>
              <p>
                {item.replyingTo && <strong>@{item.replyingTo}</strong>}{' '}
                {item.content}
              </p>
            </div>
          </Card>
        </>
      ))}
      {reply && (
        <NewReply
          onAddReply={console.log('added')}
          replyingTo={'username'}
          id={'id'}
        />
      )}
    </List>
  );
};

export default RepliesList;
