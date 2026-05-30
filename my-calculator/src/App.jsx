import Board from "./components/Board";
import styled from "styled-components";

const H1 = styled.h1`
  color: rgb(22 227 163);
`;

export default function App() {
  return (
    <>
      <H1>Welcome to Calculator and made your calculation easy!</H1>
      <Board />
    </>
  );
}
