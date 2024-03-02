import styled from "styled-components/native";

export const Contaier = styled.SafeAreaView`
  flex: 1;
  background: #252525;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 20;
  height: 50;
`;

export const Title = styled.Text`
  color: #ffff;
  font-size: 23;
  justify-self: center;
  margin: 0 auto;
`;

export const InputsWrapper = styled.View`
  padding-horizontal: 20;
  margin-top: 60;
  flex: 1;
`;

export const Input = styled.TextInput`
  height: auto;
  color: #fff;
`;

export const SubmitWrapper = styled.View`
  margin-top: 60;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  height: 50;
  border-radius: 13%;
`;

export const SubmitText = styled.Text`
  color: "#ffff";
  font-size: 20;
  font-weight: "bold";
`;
