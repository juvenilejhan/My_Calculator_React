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
  const [displayOutput, setDisplayOutput] = useState(["0"]);
  const [operatorCount, setOperatorCount] = useState(0);

  const doCalculation = (num1, num2, operator) => {
    switch (operator) {
      case "+":
        return String(num1 + num2);
      case "-":
        return String(num1 - num2);
      case "*":
        return String(num1 * num2);
      case "/":
        return String(num1 / num2);
      default:
        return String(-1);
    }
  };
  const processString = (prevOutputs) => {
    let isSecondNumber = false;
    let num1 = "";
    let num2 = "";
    let operator = "";
    prevOutputs.forEach((eachDigit) => {
      if (!isNaN(eachDigit)) {
        if (!isSecondNumber) num1 += eachDigit;
        else num2 += eachDigit;
      } else {
        operator = eachDigit;
        isSecondNumber = true;
      }
      console.log(`Precess: ${eachDigit}`);
    });
    console.log(num1);
    console.log(num2);
    console.log(operator);
    setOperatorCount(0);
    return doCalculation(Number(num1), Number(num2), operator);
  };
  function handleDisplay(input) {
    setDisplayOutput((prevOutputs) => {
      let nextOutput = prevOutputs;

      if (prevOutputs[0] === "0") nextOutput = [input];
      else if (prevOutputs.length !== 0 && input >= "0" && input <= "9")
        nextOutput = [...prevOutputs, input];
      else if (
        input === "+" ||
        input === "-" ||
        input === "*" ||
        input === "/" ||
        input === "="
      ) {
        nextOutput = [...prevOutputs, input];
        setOperatorCount((prevCount) => prevCount + 1);
        // console.log(calcFlag);
        if (operatorCount === 2 || input === "=") {
          // console.log(prevOutputs);
          // console.log(nextOutput);
          nextOutput = processString(prevOutputs);
        } else {
          //
        }
      }

      // console.log(nextOutput);
      return nextOutput;
    });
  }

  function resetDisplay() {
    setDisplayOutput(["0"]);
  }

  return (
    <StyledBoard>
      <Display input={displayOutput} />
      <KeyBoard onInput={handleDisplay} onReset={resetDisplay} />
    </StyledBoard>
  );
}
