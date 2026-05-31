import { styled } from "styled-components";
import KeyPad from "./KeyPad";

const StyledKeyBoard = styled.div`
  background-color: rgba(40, 187, 192, 0.5);
  height: 75%;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 0.2rem;
  justify-content: end;
  align-items: top;
  padding: 0.25rem;
`;

export default function KeyBoard({ handleDisplay }) {
  return (
    <StyledKeyBoard>
      <KeyPad handleDisplay={handleDisplay} value="CE" />
      <KeyPad handleDisplay={handleDisplay} value="1" />
      <KeyPad handleDisplay={handleDisplay} value="2" />
      <KeyPad handleDisplay={handleDisplay} value="3" />
      <KeyPad handleDisplay={handleDisplay} value="4" />
      <KeyPad handleDisplay={handleDisplay} value="5" />
      <KeyPad handleDisplay={handleDisplay} value="6" />
      <KeyPad handleDisplay={handleDisplay} value="7" />
      <KeyPad handleDisplay={handleDisplay} value="8" />
      <KeyPad handleDisplay={handleDisplay} value="9" />
      <KeyPad handleDisplay={handleDisplay} value="0" />
      <KeyPad handleDisplay={handleDisplay} value="+" />
      <KeyPad handleDisplay={handleDisplay} value="-" />
      <KeyPad handleDisplay={handleDisplay} value="*" />
      <KeyPad handleDisplay={handleDisplay} value="/" />
      <KeyPad handleDisplay={handleDisplay} value="=" />
    </StyledKeyBoard>
  );
}
