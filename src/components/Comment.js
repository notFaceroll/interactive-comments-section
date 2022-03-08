import styled from 'styled-components';
import { Card } from './Card';

import userProfilePic from '../assets/avatars/image-amyrobson.png';

const Rating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: hsl(228, 33%, 97%);
  border-radius: 5px;
  height: 100%;
  padding: 0.5rem;
  button {
    border: none;
    background-color: transparent;
    padding: 1rem 0;
    cursor: pointer;
  }
`;

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
  }
`;

const Comment = (props) => {
  console.log(props.picture);
  return (
    <Card>
      <Rating>
        <button>+</button>
        <span>{props.score}</span>
        <button>-</button>
      </Rating>
      <div>
        <User>
          <figure>
            <img src={`${props.picture}`} />
          </figure>
          <p>{props.username}</p>
          <div>{props.date}</div>
        </User>
        <p>
          {props.replyingTo && <span>@{props.replyingTo}</span>}
          {props.content}
        </p>
      </div>
    </Card>
  );
};

export default Comment;
