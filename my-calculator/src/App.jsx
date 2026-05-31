import Board from "./components/Board";
import styled from "styled-components";

const H1 = styled.h1`
  color: #16e3a3;
`;

export default function App() {
  return (
    <>
      <H1>Welcome to Calculator and make your calculation easy!</H1>
      <Board />
    </>
  );
}
