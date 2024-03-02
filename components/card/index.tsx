import {
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import * as S from "./styles";

type CardProps = {
  title: string;
  color: string;
};

const Card = ({ title, color }: CardProps) => {
  return (
    <TouchableOpacity onPress={() => console.log("test")}>
      <S.Wrapper background={color}>
        <S.Title>{title}</S.Title>
      </S.Wrapper>
    </TouchableOpacity>
  );
};

export default Card;
