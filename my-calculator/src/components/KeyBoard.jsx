import { styled } from "styled-components";
import KeyPad from "./Keypad";

const StyledKeyBoard = styled.div`
  background-color: rgba(40, 187, 192, 0.5);
  height: 75%;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 0.2rem;
  // justify-content: end;
  // align-items: top;
  padding: 0.25rem 0.2rem;
  border-radius: 0.5rem;
`;

export default function KeyBoard({ onInput, onReset }) {
  return (
    <StyledKeyBoard>
      <KeyPad onInput={onInput} value="1" />
      <KeyPad onInput={onInput} value="2" />
      <KeyPad onInput={onInput} value="3" />
      <KeyPad type="special" onInput={onInput} onReset={onReset} value="CE" />
      <KeyPad onInput={onInput} value="4" />
      <KeyPad onInput={onInput} value="5" />
      <KeyPad onInput={onInput} value="6" />
      <KeyPad type="operator" onInput={onInput} value="+" />
      <KeyPad onInput={onInput} value="7" />
      <KeyPad onInput={onInput} value="8" />
      <KeyPad onInput={onInput} value="9" />
      <KeyPad type="operator" onInput={onInput} value="-" />
      <KeyPad onInput={onInput} value="0" />
      <KeyPad type="operator" onInput={onInput} value="*" />
      <KeyPad type="operator" onInput={onInput} value="/" />
      <KeyPad type="special" onInput={onInput} value="=" />
    </StyledKeyBoard>
  );
}
