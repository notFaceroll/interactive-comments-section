import React, { useState } from 'react';

import plusIcon from '../assets/icon-plus.svg';
import minusIcon from '../assets/icon-minus.svg';

import styled from 'styled-components';

const ButtonHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: hsl(228, 33%, 97%);
  border-radius: 12.5px;
  padding: 0.25rem;
  font-weight: 400;
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  justify-self: center;
  align-self: center;

  span {
    color: ${({ theme }) => theme.colors.primary.modarateBlue};
  }

  @media screen and (max-width: 500px) {
    grid-row: 3 / 4;
    grid-column: 1 / 4;
    flex-direction: row;
  }
`;

const Button = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  img {
    filter: ${(props) =>
      props.voted || props.downVoted
        ? 'invert(80%) sepia(34%) saturate(572%) hue-rotate(196deg) brightness(100%) contrast(88%)'
        : ''};
  }
  padding: 0.8rem;
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
      <Button
        onClick={decrementScore}
        disabled={hasUpVoted}
        downVoted={hasDownVoted}
      >
        <img src={minusIcon} alt="" />
      </Button>
    </ButtonHolder>
  );
};

export default Rating;
