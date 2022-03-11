import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Comment from '../Comment';

import { userData } from '../../assets/userData';
import Reply from '../NewReply';

const comments = userData.comments;

const List = styled.ul`
  margin: 0 auto;
  width: clamp(10rem, 40vw, 800px);
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Feed = () => {
  const [commentsData, setCommentsData] = useState([]);
  // console.log(comments);
  // console.log(commentsData);

  useEffect(() => {
    setCommentsData(comments);
  }, []);

  // console.log('feed refresh');
  return (
    <List>
      {commentsData.map((item, index) => (
        <Comment
          key={index}
          index={index}
          content={item.content}
          date={item.createdAt}
          id={item.id}
          replies={item.replies}
          score={item.score}
          username={item.user.username}
          picture={item.user.image.png}
        />
      ))}
      <Reply label="send" />
    </List>
  );
};

export default Feed;
