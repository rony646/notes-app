import { Pressable, StyleProp, View, ViewStyle } from "react-native";

interface ButtonProps {
  onPress(): void;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Button = ({ children, style, onPress }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed ? { opacity: 0.5 } : {}]}
    >
      <View
        style={[
          {
            backgroundColor: "#3b3b3b",
            height: 45,
            width: 45,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          },
          style,
        ]}
      >
        {children}
      </View>
    </Pressable>
  );
};

export default Button;
