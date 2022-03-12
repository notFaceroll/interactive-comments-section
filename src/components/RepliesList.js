import React, { useState } from 'react';
import styled from 'styled-components';
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
// seta um ID pra cada reply, compara o ID da reply clicada com o da arry e abre a box?

const RepliesList = (props) => {
  // console.log(props.replies);
  const [reply, setIsReply] = useState(false);
  const [repList, setRepList] = useState(props.replies);

  console.log('list: ');
  console.log(repList);

  const setNewReplyHandler = () => {
    setIsReply(!reply);
  };

  const updateReplies = (newReply) => {
    console.log(newReply);
    setRepList((old) => [...old, newReply]);
    setNewReplyHandler(!reply);
    console.log(repList);
  };

  return (
    <List>
      {repList.map((item, index) => (
        <Reply
          id={item.id}
          key={index}
          score={item.score}
          picture={item.user.image.png}
          username={item.user.username}
          createdAt={item.createdAt}
          replyingTo={item.replyingTo}
          content={item.content}
          newReply={updateReplies}
        />
      ))}
    </List>
  );
};

export default RepliesList;
