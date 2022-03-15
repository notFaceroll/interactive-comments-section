import React, { useState } from 'react';

import plusIcon from '../../assets/icon-plus.svg';
import minusIcon from '../../assets/icon-minus.svg';

import styled from 'styled-components';

const ButtonHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: hsl(228, 33%, 97%);
  border-radius: 5px;
  height: 100%;
  padding: 0.5rem;
  font-weight: 400;
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  justify-self: center;
  align-self: center;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  img {
    filter: ${(props) =>
      props.voted
      ? 'invert(46%) sepia(14%) saturate(427%) hue-rotate(171deg) brightness(91%) contrast(86%)'
      : 'invert(29%) sepia(26%) saturate(586%) hue-rotate(172deg) brightness(98%) contrast(89%)'};
  }
  padding: 0.7rem;
  cursor: pointer;
`;


const Rating = ({ score }) => {
  const [hasUpVoted, setHasUpVoted] = useState(false);
  const [hasDownVoted, setHasDownVoted] = useState(false);
  const [commentScore, setCommentScore] = useState(score);

  const incrementScore = () => {
    if (hasUpVoted) {
      setCommentScore(commentScore - 1);
      setHasUpVoted(false);
    } else {
      setCommentScore(commentScore + 1);
      setHasUpVoted(true);
    }
  };

  const decrementScore = () => {
    if (hasDownVoted) {
      setCommentScore(commentScore + 1);
      setHasDownVoted(false);
    } else {
      setCommentScore(commentScore - 1);
      setHasDownVoted(true);
    }
  };

  return (
    <ButtonHolder>
      <Button
        onClick={incrementScore}
        disabled={hasDownVoted}
        voted={hasUpVoted}
      >
        <img src={plusIcon} alt="" />
      </Button>
      <span>{commentScore}</span>
      <Button onClick={decrementScore} disabled={hasUpVoted}>
        <img src={minusIcon} alt="" />
      </Button>
    </ButtonHolder>
  );
};

export default Rating;
