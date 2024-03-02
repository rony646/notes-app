import { View, Text, Pressable, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import * as S from "./styles";
import { RootStackParamList } from "../../utils/routes";
import { useState } from "react";

type CreateScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "/create"
>;

type HomeProps = {
  navigation: CreateScreenNavigationProp;
};

const Create = ({ navigation }: HomeProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <S.Contaier>
      <S.Header>
        <Pressable
          onPress={() => navigation.goBack()}
          style={({ pressed }) => [pressed ? { opacity: 0.5 } : {}]}
        >
          <Ionicons name="arrow-back" size={30} color="#fff" />
        </Pressable>
        <S.Title>Create</S.Title>
      </S.Header>

      <S.InputsWrapper>
        <S.Input
          placeholder="Type the title..."
          placeholderTextColor="#ffffff59"
          multiline
          onChangeText={(value) => setTitle(value)}
          style={{
            fontSize: 48,
          }}
        />

        <S.Input
          placeholder="Type the description..."
          placeholderTextColor="#ffffff59"
          multiline
          onChangeText={(value) => setDescription(value)}
          style={{
            marginTop: 50,
            fontSize: 25,
          }}
        />

        <Pressable
          onPress={() => console.log(title, description)}
          style={({ pressed }) => [pressed ? { opacity: 0.5 } : {}]}
        >
          <S.SubmitWrapper>
            <Text style={{ color: "#ffff", fontSize: 20, fontWeight: "bold" }}>
              Submit
            </Text>
          </S.SubmitWrapper>
        </Pressable>
      </S.InputsWrapper>
    </S.Contaier>
  );
};

export default Create;
