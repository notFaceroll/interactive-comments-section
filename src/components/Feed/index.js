import styled from 'styled-components';
import Comment from '../Comment';

import data from '../../data.json';

const { comments } = data;

const List = styled.ul`
  margin: 0 auto;
  width: clamp(10rem, 50vw, 1000px);
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ReplyList = styled.ul`
  margin: 0 auto;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 2px solid red;
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
    </List>
  );
};

export default Feed;
