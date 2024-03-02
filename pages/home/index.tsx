import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import * as S from "./styles";
import Header from "../../components/header";
import { FlatList } from "react-native";
import Card from "../../components/card";
import FloatingButton from "../../components/floatingButton";
import { RootStackParamList } from "../../utils/routes";

const data = [
  {
    id: "1",
    title: "UI concepts worth exsisting",
    content: "Some content",
    color: "#FD99FF",
  },
  {
    id: "2",
    title: "Book Review : The Design of Everyday Things by Don Norman",
    content: "Some content",
    color: "#FF9E9E",
  },
  {
    id: "3",
    title: "Animes produced by Ufotable",
    content: "Some content",
    color: "#91F48F",
  },
];

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "/home"
>;

type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

const Home = ({ navigation }: HomeProps) => {
  return (
    <S.Container>
      <Header />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card title={item.title} color={item.color} />
        )}
        style={{ paddingHorizontal: 20, marginTop: 20 }}
      />

      <FloatingButton onPress={() => navigation.navigate("/create")} />
    </S.Container>
  );
};

export default Home;
