import { Button, ButtonHolder } from "./Styles";
import plusIcon from '../../assets/icon-plus.svg';
import minusIcon from '../../assets/icon-minus.svg';


const Rating = (props) => {
  return (
    <ButtonHolder>
      <Button><img src={plusIcon} /></Button>
      <span>{props.score}</span>
      <Button><img src={minusIcon} /></Button>
    </ButtonHolder>
  );
};

export default Rating;