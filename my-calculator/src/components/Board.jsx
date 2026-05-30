import { styled } from "styled-components";
import Display from "./Display";
import KeyBoard from "./KeyBoard";

const StyledBoard = styled.div`
  background-color: rgba(49, 155, 45, 0.5);
  width: 50vw;
  max-width: 800px;
  min-width: 325px;
  margin: 0 auto;
  height: 75vh;
  padding: 0.5rem;
`;

export default function Board() {
  return (
    <StyledBoard>
      <Display input="Display" />
      <KeyBoard />
    </StyledBoard>
  );
}
