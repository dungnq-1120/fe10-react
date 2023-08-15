import { ICards } from "../../App";
import Button from "../button";
import * as Styles from "./styles";

const Card: React.FC<ICards> = ({ title, subTitle, img, tags, status }) => {
  return (
    <Styles.CardWrapper status={status}>
      <Styles.subTitle>{subTitle}</Styles.subTitle>
      <Styles.Title>{title}</Styles.Title>
      <img src={img} />
     <Styles.Tags>
     {tags.map((tag) => (
        <Button status={status} label={tag} />
      ))}
     </Styles.Tags>
    </Styles.CardWrapper>
  );
};

export default Card;
