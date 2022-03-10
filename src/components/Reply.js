import React from 'react';

import { Card } from './Card';
import userPicture from '../assets/avatars/image-juliusomo.png';
import styled from 'styled-components';

const TextArea = styled.textarea`
resize: none;`

const Reply = (props) => {
  return (
    <Card>
      <picture>
        <img src={userPicture} />
      </picture>
      <form>
        <TextArea placeholder='Add a comment...'></TextArea>
        <button>Send</button>
      </form>
    </Card>
  );
};

export default Reply;
