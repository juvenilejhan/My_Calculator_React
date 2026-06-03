import { styled } from "styled-components";
import Display from "./Display";
import KeyBoard from "./KeyBoard";
import { useState } from "react";

const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  background-color: rgba(55, 70, 209, 0.5);
  width: 50vw;
  max-width: 500px;
  min-width: 325px;
  margin: 0 auto;
  height: 75vh;
  padding: 0.5rem;
  border: 2px #9ac11c solid;
  border-radius: 0.5rem;
`;

export default function Board() {
  const [displayOutput, setDisplayOutput] = useState("0");

  function handleDisplay(input) {
    setDisplayOutput((prevOutput) => {
      if (prevOutput === "0") return input;
      else return prevOutput + input;
    });
  }

  function resetDisplay() {
    setDisplayOutput("0");
  }

  return (
    <StyledBoard>
      <Display input={displayOutput} />
      <KeyBoard onInput={handleDisplay} onReset={resetDisplay} />
    </StyledBoard>
  );
}
