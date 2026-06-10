import { styled } from "styled-components";

const StyledDisplay = styled.div`
  background-color: rgb(166, 196, 207);
  height: 25%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: black;
  font-weight: bold;
  padding: 0.5rem;
  border: 2px black solid;
  font-size: 2rem;
  border-radius: 0.5rem;
`;

export default function Display({ input }) {
  return <StyledDisplay>{input}</StyledDisplay>;
}
