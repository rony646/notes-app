import * as S from "./styles";
import Header from "../../components/header";
import { FlatList, Text } from "react-native";

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

const Home = () => {
  return (
    <S.Container>
      <Header />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ color: "#fff" }}>{item.title}</Text>
        )}
      />
    </S.Container>
  );
};

export default Home;
