import { styled } from "styled-components";
import KeyPad from "./Keypad";

const StyledKeyBoard = styled.div`
  background-color: rgba(54, 143, 185, 0.5);
  height: 75%;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  justify-content: right;
  align-items: top;
  color: black;
  font-weight: bold;
  padding: 0.5rem;
`;

export default function KeyBoard() {
  return (
    <StyledKeyBoard className="keypad">
      <KeyPad value="1" />
      <KeyPad value="2" />
      <KeyPad value="3" />
      <KeyPad value="4" />
      <KeyPad value="5" />
      <KeyPad value="6" />
      <KeyPad value="7" />
      <KeyPad value="8" />
      <KeyPad value="9" />
      <KeyPad value="0" />
      <KeyPad value="+" />
      <KeyPad value="-" />
      <KeyPad value="*" />
      <KeyPad value="/" />
      <KeyPad value="=" />
      <KeyPad value="CE" />
    </StyledKeyBoard>
  );
}
