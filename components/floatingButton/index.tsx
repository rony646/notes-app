import { Pressable, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type FloatingButtonProps = {
  onPress(): void;
};

const FloatingButton = ({ onPress }: FloatingButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed ? { opacity: 0.5 } : {}]}
    >
      <View
        style={{
          position: "absolute",
          right: 20,
          bottom: 110,
          backgroundColor: "#000000",
          height: 60,
          width: 60,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
          shadowOffset: { width: 4, height: 2 },
          shadowColor: "#5a5959b5",
          shadowOpacity: 0.6,
        }}
      >
        <Ionicons name="add-outline" size={30} color="#fff" />
      </View>
    </Pressable>
  );
};

export default FloatingButton;
