import React from 'react';
import styled from 'styled-components';
import Comment from '../Comment';

import { userData } from '../../assets/userData';
import Reply from '../Reply';

const { comments } = userData;

const List = styled.ul`
  margin: 0 auto;
  width: clamp(10rem, 40vw, 800px);
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ReplyList = styled.ul`
  margin: 0 auto;
  width: 93%;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Feed = (props) => {
  return (
    <List>
      {comments.map((item, index) => (
        <>
          <Comment
            key={index}
            score={item.score}
            content={item.content}
            username={item.user.username}
            picture={item.user.image.png}
            date={item.createdAt}
          />
          {item.replies.length > 0 && (
            <ReplyList>
              {item.replies.map((reply, idx) => (
                <Comment
                  key={idx}
                  score={reply.score}
                  content={reply.content}
                  username={reply.user.username}
                  picture={reply.user.image.png}
                  date={reply.createdAt}
                  replyingTo={reply.replyingTo}
                />
              ))}
            </ReplyList>
          )}
        </>
      ))}
      <Reply label="send" />
    </List>
  );
};

export default Feed;
