import { Button, ButtonHolder } from "./Styles";


const Rating = (props) => {
  return (
    <ButtonHolder>
      <Button>+</Button>
      <span>{props.score}</span>
      <Button>-</Button>
    </ButtonHolder>
  );
};

export default Rating;