import { styled } from "styled-components";

const StyledKeyBoard = styled.div`
  background-color: rgba(54, 143, 185, 0.5);
  height: 75%;
  display: grid;
  justify-content: right;
  align-items: top;
  color: black;
  font-weight: bold;
  padding: 0.5rem;
`;

export default function KeyBoard() {
  return <StyledKeyBoard className="keypad">Keypad</StyledKeyBoard>;
}
