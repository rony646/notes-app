import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import * as S from "./styles";
import Button from "../button";

const Header = () => {
  return (
    <S.Wrapper>
      <Text style={{ fontWeight: "bold", fontSize: 32, color: "#ffff" }}>
        Notes
      </Text>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Button
          onPress={() => console.log("Pressed")}
          style={{ marginRight: 20 }}
        >
          <Ionicons name="search" size={30} color="#fff" />
        </Button>

        <Button onPress={() => console.log("Pressed")}>
          <Ionicons name="information-circle-outline" size={30} color="#fff" />
        </Button>
      </View>
    </S.Wrapper>
  );
};

export default Header;
