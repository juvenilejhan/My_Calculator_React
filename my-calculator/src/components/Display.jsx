import { styled } from "styled-components";

const StyledDisplay = styled.div`
  background-color: rgba(216, 221, 223, 0.5);
  height: 25%;
  display: grid;
  justify-content: right;
  align-items: center;
  color: black;
  font-weight: bold;
  padding: 0.5rem;
  border: 2px black solid;
  font-size: 2rem;
  border-radius: 0.5rem;
`;

export default function Display({input}) {
  return <StyledDisplay>{input}</StyledDisplay>;
}
