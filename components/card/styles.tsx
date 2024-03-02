import styled from "styled-components/native";

export const Wrapper = styled.View<{ background: string }>`
  background: ${(props) => props.background};
  height: auto;
  margin-bottom: 30;
  padding-horizontal: 35;
  padding-vertical: 30;
  border-radius: 15%;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 30;
  font-weight: 300;
`;
