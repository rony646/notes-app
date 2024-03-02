import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

import styled from "styled-components/native";
import Home from "./pages/home";

const Container = styled.View`
  align-items: center;
  justify-content: center;
  background: #252525;
  flex: 1;
`;

export default function App() {
  return (
    <Container>
      <Home />
      <StatusBar style="auto" />
    </Container>
  );
}
